import React, { useState, useEffect } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'

import NovelSwiperItem from './NovelSwiperItem'

const NovelSwiperList = (props) => {

    const [fetching, setFetching] = useState(false)
    const [novels, setNovels] = useState([])

    useEffect(() => {
        getNovels()
    }, [])

    const getNovels = () => {
        let novels = [{
            _id: "123",
            title: "Хуйларч буй луу",
            total_chapter: 19,
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 300,
            rating: 5.0,
            author: "I eat tomatoes"
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            total_chapter: 19,
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 300,
            prating:  5.0,
            author: "I eat tomatoes"
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            total_chapter: 19,
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 300,
            rating: 5.0,
            author: "I eat tomatoes"
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            total_chapter: 19,
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 300,
            rating: 5.0,
            author: "I eat tomatoes"
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            total_chapter: 19,
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 300,
            rating: 5.0,
            author: "I eat tomatoes"
        }]

        setNovels(novels)
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
                <Text h2>Санал болгох зохиолууд</Text>
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