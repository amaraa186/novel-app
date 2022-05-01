import React, { useState, useEffect, useContext } from 'react'
import { ScrollView, Image, TouchableOpacity, ActivityIndicator, View } from 'react-native'
import { Box, Text } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchNovel, fetchNovelFirstChapter, novelBookmark } from './NovelApi';
import { checkNovelBookmark } from '../bookmark/BookmarkApi'
import _ from 'lodash'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import UserContext from '../../context/UserContext'

const NovelDetail = (props) => {
    const state = useContext(UserContext)
    const [novel, setNovel] = useState({})
    const [fetching, setFetching] = useState(false)
    const [bookmark, setBookmark] = useState(false)

    const onBack = () => props.navigation.goBack()

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
        getNovel()
    }, [])

    useEffect(() => {
        oncheckBookmark()
    }, [])

    const oncheckBookmark = () => {
        checkNovelBookmark({user: state.user._id, novel: props.route.params._id})
        .then((res) => {
            if(res.data.code == 0) {
                return res.data.value == null ? setBookmark(false) : setBookmark(true);
            }
        }).catch((err) => console.log(err))
    }

    const getNovel = () => {
        setFetching(true)

        fetchNovel(props.route.params._id)
        .then((res) => {
            if(res.data.code == 0){
                setNovel(res.data.novel)
            }
        }).catch((err) => console.log(err))
        .then(() => setFetching(false))
    }

    const onReadChapter = async () => {

        if(state.isLogged == true){
            try {
                let value = await AsyncStorage.getItem(`@${novel.title}`)
                if(value == null){
                    fetchNovelFirstChapter(props.route.params._id)
                    .then((res) => {

                        if(res.data.code != 0){
                            return Toast.show({
                                type: 'error',
                                text1: 'Алдаа',
                                text2: res.data.content
                            }); 
                        }

                        return onchapterPressed(res.data.firstChapter._id)

                    }).catch((err) => console.log(err))
                    
                } else {
                    return onchapterPressed(JSON.parse(value))
                }
    
            } catch (error) {
                console.log(error)
            }
        } else {
            props.navigation.navigate('LoginMain')
        }
    }

    const onBookmark = (id, uId) => {
        if(state.isLogged == true){
            novelBookmark({
                novel_id: id,
                user_id: uId
            })
            .then((res) => {
                if(res.data.code == 0){
                    if(res.data.value == null){
                       return setBookmark(false)
                    } else {
                       return setBookmark(true)
                    }
                }
            })
        } else {
            props.navigation.navigate('LoginMain')
        }
    }

    if(fetching == true || _.isEmpty(novel)){
        return (
            <View style={{alignContent: 'center', justifyContent: 'center', flex: 1}}>
                <ActivityIndicator />
            </View>
        )
    } else {
        return (
            <Box>
                <ScrollView contentContainerStyle={{
                        padding: 10
                    }}>
                    <Box pY={4} jc='between' direction='row'>
                        <TouchableOpacity onPress={onBack}>
                            <MaterialCommunityIcons name='chevron-left' size={22} color='black'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onBookmark(novel._id, state.user._id)}>
                            <MaterialCommunityIcons name={bookmark == false ? 'heart-outline' : 'heart'} size={22} color={bookmark == false ? 'black' : 'red'}/>
                        </TouchableOpacity>
                    </Box>
                    <Box>
                        <Box pY={8} align='center'>
                            <Box height={250} width={170}>
                                <Image 
                                    source={{
                                        uri: novel.cover_url
                                    }}
                                    style={{
                                        flex: 1,
                                        width: null,
                                        height: null,
                                        borderRadius: 10
                                    }}
                                />
                            </Box>
                            <Box pY={12} align='center'>
                                <Text h2 font='bold'>{novel.title}</Text>
                                <Text color='gray' font='bold'>ЗОХИОЛЧ: {novel.author.toUpperCase()}</Text>
                            </Box>
                        </Box>
                        <Box direction='row' jc='between' pX={16} pY={12}>
                            <Box>
                                <Text align='center' font='bold'>Гарч эхэлсэн</Text>
                                <Text align='center' color='gray'>{novel.started_year}</Text>
                            </Box>
                            <Box>
                                <Text align='center' font='bold'>Нийт бүлэг</Text>
                                <Text align='center' color='gray'>{novel.total_chapter}</Text>
                            </Box>
                            <Box>
                                <Text align='center' font='bold'>Үнэлгээ</Text>
                                <Text align='center' color='gray'>{novel.rating}</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box direction='row' pY={12} pX={12} flex={1} style={{ flexWrap: 'wrap' }}>
                        {
                            novel.categories.map((tag, i) => (
                                <Box pY={5} pX={5} bg='waterBlue' bR={5} key={i} mR={6} mB={6}>
                                    <Text size={12} align='center'>
                                        {tag.title}
                                    </Text>
                                </Box>
                            ))
                        }
                    </Box>
                    <Box pX={12}>
                        <Text h2>Тайлбар</Text>
                        <Text align='justify'>{novel.description}</Text>
                    </Box>
                    <Box pY={12} pX={12}>
                        <TouchableOpacity onPress={onReadChapter}>
                            <Box bg='blue' pY={12} pX={12}>
                                <Text align='center' color='white'>Унших</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </ScrollView>
            </Box>
        )
    }
}

export default NovelDetail