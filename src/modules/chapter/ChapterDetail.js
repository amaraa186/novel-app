import React, { useState, useRef, useEffect } from 'react'
import { ScrollView, View, TouchableOpacity, DrawerLayoutAndroid, ActivityIndicator } from 'react-native'
import { Box, Text } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
const readingTime = require('reading-time');
import { fetchChapter, fetchNovelChapters } from './ChapterApi';
import _ from 'lodash'



const ChapterDetail = (props) => {
    const drawer = useRef()
    const [fontSize, setFontSize] = useState(14)
    const [colorTheme, setColorTheme] = useState(true)
    const [colorText, setColorText] = useState(true)
    const [chapter, setChapter] = useState({})
    const [fetching, setFetching] = useState(false)
    const [chapters, setChapters] = useState([])

    const onBack = () => props.navigation.goBack()

    const onThemeChange = () => {
        setColorText(!colorText)
        setColorTheme(!colorTheme)
    }

    const onchapterPressed = (id) => {
        props.navigation.navigate('ChapterDetail', {
            _id: id
        })
    }
        
    useEffect(() => {
        getChapter()
    }, [])

    useEffect(() => {
        if(!_.isEmpty(chapter))
        getChapters()
    }, [chapter])

    const getChapter = () => {
        setFetching(true)

        fetchChapter(props.route.params._id)
        .then((res) => {
            if(res.data.code == 0){
                setChapter(res.data.chapter)
            }
        }).catch((err) => console.log(err))
        .then(() => setFetching(false))
    }

    const getChapters = () => {
        fetchNovelChapters(chapter.novel._id)
        .then((res) => {
            if(res.data.code == 0) {
                setChapters(res.data.chapters)
            }
        })
        .catch((err) => console.log(err))
    }

    const sideBar = () => (
        <Box>
            <Box pY={10}>
                <Text align='center' font='bold'>Бүлгүүд</Text>
            </Box>
            <ScrollView>
            {
                chapters.map((chapter, i) => (
                    <TouchableOpacity onPress={() => onchapterPressed(chapter._id)}>
                        <Box pY={8}>
                            <Text align='center'>Бүлэг {chapter.episode} - {chapter.title}</Text>
                        </Box>
                    </TouchableOpacity>
                ))
            }
            </ScrollView>
        </Box>
    )
    if(fetching == true || _.isEmpty(chapter)){
        return (
            <View style={{alignContent: 'center', justifyContent: 'center', flex: 1}}>
                <ActivityIndicator />
            </View>
        )
    } else {    
        return (
            <DrawerLayoutAndroid
                    ref={drawer}
                    drawerWidth={300}
                    drawerPosition='left'
                    renderNavigationView={sideBar}
                >
                <Box flex={1} insetsTop>
                    <Box flex={1}>
                        <View style={{ position: 'absolute', top: 15, right: 0, zIndex: 2 }}>
                            <Box direction='row' jc='end' pX={20}>
                                <TouchableOpacity onPress={onBack}>
                                    <Box bg="transBlack" height={30} width={30} jc='center' align='center' bR={15}>
                                        <MaterialCommunityIcons name="close" size={20} color="white" />
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        </View>
                        <ScrollView contentContainerStyle={{
                            padding: 20
                        }} style={{backgroundColor: colorTheme == true ? "white" : "#212129"}}>
                            <Box>
                                <Text align='center' color={colorText == true ? "black" : "white"}>Бүлэг - {chapter.episode}</Text>
                            </Box>
                            <Box>
                                <Text h2 align='center' font='bold' color={colorText == true ? "black" : "white"}>{chapter.title}</Text>
                            </Box>
                        
                            <Text lineHeight={fontSize * 2} size={fontSize} align='justify' color={colorText == true ? "black" : "white"}>{chapter.content}</Text>
                        </ScrollView>

                        <Box bg='black'>
                            <Box direction='row' align='center' jc='between' pX={14} pY={3}>
                                {
                                    chapter.episode > 1 && 
                                    <TouchableOpacity>
                                        <MaterialCommunityIcons color='white' name="chevron-left" size={20}/>
                                    </TouchableOpacity> ||
                                    <Box />
                                }
                                <Text color='white'>{100 * chapter.episode / chapters.length}%</Text>
                                {
                                    chapter.episode != chapters.length && 
                                    <TouchableOpacity>
                                        <MaterialCommunityIcons color='white' name="chevron-right" size={20}/>
                                    </TouchableOpacity> ||
                                    <Box />
                                }
                            </Box>
                            <Box height={60} pX={20} pY={8} direction='row'>
                                <Box flex={1} direction='row'>
                                    <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
                                        <Box pA={10} bg='white' height={40}>
                                            <Text font='bold'>{chapter.episode}/{chapters.length}</Text>
                                        </Box>
                                    </TouchableOpacity>

                                    <Box width={8} />
                                    
                                    <TouchableOpacity onPress={onThemeChange}>
                                        <Box pA={10} bg='white' height={40}>
                                            {
                                                colorTheme == true ? 
                                                (<MaterialCommunityIcons name="brightness-2" size={20} color="black" />) 
                                                : 
                                                (<MaterialCommunityIcons name="brightness-5" size={20} color="black" />) 
                                            }
                                        </Box>
                                    </TouchableOpacity>
                                </Box>
                                {/* <Box>
                                    <Text>{readDetail.text}</Text>
                                </Box> */}
                                <Box direction='row' jc='end'>
                                    <TouchableOpacity onPress={() => setFontSize(fontSize / 1.2)}>
                                        <Box height={40} width={40} bg='white' jc='center' align='center'>
                                            <Text font='bold'>A-</Text>
                                        </Box>
                                    </TouchableOpacity>
                                    <Box width={8}/>
                                    
                                    <TouchableOpacity onPress={() => setFontSize(fontSize * 1.2)}>
                                        <Box height={40} width={40} bg='white' jc='center' align='center'>
                                            <Text font='bold'>A+</Text>
                                        </Box>
                                    </TouchableOpacity>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </DrawerLayoutAndroid>
        )
    }
}

export default ChapterDetail