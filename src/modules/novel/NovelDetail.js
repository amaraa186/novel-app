import React, { useState, useEffect } from 'react'
import { ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Box, Text } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import { fetchNovel } from './NovelApi';

const NovelDetail = (props) => {
    const [novel, setNovel] = useState()
    const [fetching, setFetching] = useState(false)

    const onBack = () => props.navigation.goBack()

    useEffect(() => {
        getNovel()
    }, [])

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
    if(fetching == true){
        return (
            <ActivityIndicator />
        )
    } else {
        return (
            <Box>
                <ScrollView contentContainerStyle={{
                        padding: 10
                    }}>
                    <Box pY={4}>
                        <TouchableOpacity onPress={onBack}>
                            <MaterialCommunityIcons name='chevron-left' size={30} color='black'/>
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
                                <Text align='center' color='gray'>{novel.started}</Text>
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
                        <Box direction='row' pY={12} pX={12} flex={1} style={{ flexWrap: 'wrap' }}>
                            {
                                novel.categories.map(tag => (
                                    <Box pY={3} pX={3}>
                                        <TouchableOpacity>
                                            <Box pY={5} pX={5} bg='waterBlue' bR={5}>
                                                <Text size={12} align='center'>
                                                    {tag.title}
                                                </Text>
                                            </Box>
                                        </TouchableOpacity>
                                    </Box>
                                ))
                            }
                        </Box>
                        <Box pX={12}>
                            <Text h2>Тайлбар</Text>
                            <Text align='justify'>{novel.description}</Text>
                        </Box>
                        <Box pY={12} pX={12}>
                            <TouchableOpacity>
                                <Box bg='blue' pY={12} pX={12}>
                                    <Text align='center' color='white'>Унших</Text>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </ScrollView>
            </Box>
        )
    }
}

export default NovelDetail