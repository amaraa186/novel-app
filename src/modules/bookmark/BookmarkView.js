import React, { useState, useEffect } from 'react'
import { ScrollView, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { fetchBookmarkedNovels } from './BookmarkApi'

const BookmarkView = (props) => {
    const [novels, setNovels] = useState([])
    const [fetching, setFetching] = useState(false)

    const onNovelPressed = (id) => {
        props.navigation.navigate('NovelDetail', {
            _id: id
        })
    }

    useEffect(() => {
        getNovels()
    }, [])

    const getNovels = async () => {
        try {
            let value = await AsyncStorage.getItem('@bookmark')
            let mainValue = JSON.parse(value)

            if(mainValue.length != 0){
                setFetching(true)

                fetchBookmarkedNovels(mainValue)
                .then((res) => {
                    if(res.data.code == 0) {
                        setNovels(res.data.novels)
                    }
                }).catch((err) => console.log(err))
                .then(() => setFetching(false))
            }

        } catch (error) {
            console.log(error)
        }
    }

    if(fetching == true){
        return (
            <View style={{alignContent: 'center', justifyContent: 'center', flex: 1}}>
                <ActivityIndicator />
            </View>
        )
    } else {
        return (
            <ScrollView contentContainerStyle={{
                padding: 10
            }}>
                <Box direction='row' style={{flexWrap: 'wrap'}}>
                    {
                        novels.map((novel, i) => (
                            <TouchableOpacity onPress={() => onNovelPressed(novel._id)}>
                                <Box pY={10} pX={6}>
                                    <Box width={115} height={160}>
                                        <Image
                                            source={{
                                                uri: novel.cover_url,
                                            }}
                                            style={{
                                                flex: 1,
                                                width: null,
                                                height: null,
                                            }}
                                        />
                                    </Box>
                                    <Box width={115}>
                                        <Text align='center'>{novel.title}</Text>
                                    </Box>
                                </Box>
                            </TouchableOpacity>
                        ))
                    }
                </Box>
            </ScrollView>
        )
    }
}

export default BookmarkView