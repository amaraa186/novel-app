import React, { useState, useRef, useEffect } from 'react'
import { ScrollView, View, TouchableOpacity, DrawerLayoutAndroid, ActivityIndicator } from 'react-native'
import { Box, Text } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import { fetchChapter, fetchNovelChapters } from './ChapterApi';
import _ from 'lodash'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../context/UserContext'

const ChapterDetail = (props) => {
    const drawer = useRef()
    const [fontSize, setFontSize] = useState(14)
    const [colorTheme, setColorTheme] = useState()
    const [chapter, setChapter] = useState({})
    const [fetching, setFetching] = useState(false)
    const [chapters, setChapters] = useState([])

    useEffect(() => {
        getThemeColor()
    }, [])

    const onBack = () => {
        saveChapter()
        props.navigation.navigate({name: 'Home'})
    }

    const saveChapter = async () => {
        try {
            await AsyncStorage.setItem(`@${chapter.novel.title}`, JSON.stringify(chapter._id))
        } catch (error) {
            console.log(error)
        }
    }

    const onThemeChange = () => {
        // setColorTheme(!colorTheme)
        changeThemeColor()
    }

    const getThemeColor = async () => {
        try {
            await AsyncStorage.getItem('@ColorTheme')
            .then( value => {
                if(value != null){
                   setColorTheme(JSON.parse(value))
                } else {
                    AsyncStorage.setItem('@ColorTheme', 'true')
                    .then(() => setColorTheme(true))
                }
            })
        } catch(e) {
            console.log(e)
        }
    }

    const changeThemeColor = async () => {
        try {
            await AsyncStorage.getItem('@ColorTheme')
            .then(value => {
                if(value != null){
                    AsyncStorage.setItem('@ColorTheme', (!colorTheme).toString())
                    .then(() => setColorTheme(!colorTheme))
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    const onchapterPressed = (id) => {
        props.navigation.navigate({
            name: 'ChapterDetail',
            params: {
                _id: id,
            },
            key: id
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
                // console.log(res.data.chapter)
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

    const preChapter = (episode) => {
        let findChapter = chapters.find(chapter => chapter.episode < episode)
        onchapterPressed(findChapter._id)
    }

    const afChapter = (episode) => {
        let findChapter = chapters.find(chapter => chapter.episode > episode)
        onchapterPressed(findChapter._id)
    }

    const sideBar = () => (
        <Box>
            <Box pY={10}>
                <Text align='center' font='bold'>Бүлгүүд</Text>
            </Box>
            <ScrollView>
            {
                chapters.map((chapter, i) => (
                    <TouchableOpacity onPress={() => onchapterPressed(chapter._id)} key={i}>
                        <Box pY={8}>
                            <Text align='center'>Бүлэг {chapter.episode} - {chapter.title}</Text>
                        </Box>
                    </TouchableOpacity>
                ))
            }
            </ScrollView>
        </Box>
    )
    if(fetching == true){
        return (
            <View style={{alignContent: 'center', justifyContent: 'center', flex: 1}}>
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={300}
                drawerPosition='left'
                renderNavigationView={sideBar}
            >
            <Box flex={1} insetsTop>
                <View style={{ position: 'absolute', top: 15, right: 0, zIndex: 2 }}>
                    <Box direction='row' jc='end' pX={20}>
                        <TouchableOpacity onPress={onBack}>
                            <Box bg="transBlack" height={30} width={30} jc='center' align='center' bR={15}>
                                <MaterialCommunityIcons name="close" size={22} color="white" />
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </View>
                <ScrollView contentContainerStyle={{
                    padding: 15
                }} style={{backgroundColor: colorTheme == true ? "white" : "#212129"}}>
                    <Text align='center' color={colorTheme == true ? "black" : "white"}>Бүлэг - {chapter.episode}</Text>
                    <Text h2 align='center' font='bold' color={colorTheme == true ? "black" : "white"}>{chapter.title}</Text>
                    <Text lineHeight={fontSize * 2} size={fontSize} align='justify' color={colorTheme == true ? "black" : "white"}>{chapter.content}</Text>
                </ScrollView>

                <Box bg='black'>
                    <Box direction='row' align='center' jc='between' pX={14} pY={3}>
                        {
                            chapter.episode > 1 && 
                            <TouchableOpacity onPress={() => preChapter(chapter.episode)}>
                                <MaterialCommunityIcons color='white' name="chevron-left" size={22}/>
                            </TouchableOpacity> ||
                            <Box />
                        }
                        <Text color='white'>{parseInt(100 * chapter.episode / chapters.length)}%</Text>
                        {
                            chapter.episode != chapters.length && 
                            <TouchableOpacity onPress={() => afChapter(chapter.episode)}>
                                <MaterialCommunityIcons color='white' name="chevron-right" size={22}/>
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
                                        (<MaterialCommunityIcons name="brightness-2" size={22} color="black" />) 
                                        : 
                                        (<MaterialCommunityIcons name="brightness-5" size={22} color="black" />) 
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
        </DrawerLayoutAndroid>
    )
    
}

export default ChapterDetail