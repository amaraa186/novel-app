import React, { useState, useEffect } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'
import { fetchNovels } from './NovelApi'

import NovelSwiperItem from './NovelSwiperItem'

const NovelSwiperList = (props) => {

    const [fetching, setFetching] = useState(false)
    const [novels, setNovels] = useState([])

    useEffect(() => {
        getNovels()
    }, [])

    const getNovels = () => {
        fetchNovels()
        .then((res) => {
            if(res.data.code == 0) {
                setNovels(res.data.novels)
            }
        }).catch((err) => console.log(err))
    }

    const renderNovel = ({ item }) => {
        return (
            <NovelSwiperItem 
                novel={item}
                onPress={props.onNovelPressed}
            />
        )
    }

    return (
        <Box flex={1}>
            <Box direction="row" pX={8} pY={15} jc='between' align='center'>
                <Text h2>Санал болгох</Text>
                <TouchableOpacity onPress={props.onNovelListPressed}>
                    <Text h4 color='gray'>Бүгдэнг нь үзэх</Text>
                </TouchableOpacity>
            </Box>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                data={novels}
                renderItem={renderNovel}
            />
        </Box>
    )
}

export default NovelSwiperList