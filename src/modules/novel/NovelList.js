import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Box, Text } from '../../components'

import NovelItem from './NovelItem'

const NovelList = (props) => {
    const [fetching, setFetching] = useState(false)
    const [novels, setNovels] = useState([])

    const [filter, setFilter] = useState('recent') //popular

    useEffect(() => {
        getNovels()
    }, [])

    const getNovels = () => {
        let novels = [{
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15
        }]

        setNovels(novels)
    }

    const renderNovel = ({ item }) => {
        return (
            <NovelItem 
                novel={item}
                onPress={props.onNovelPressed}
            />  
        )
    }

    return (
        <Box flex={1}>
            <Box direction='row' pX={8} pY={20}>
                <Box flex={1} shadow bg='white' pY={8} bR={20}> 
                    <Text align='center'>Сүүлд нэмэгдсэн</Text>
                </Box>
                <Box width={8} />
                <Box flex={1} bg='red' shadow pY={8} bR={20}>
                    <Text align='center'>Хандалт ихтэй</Text>
                </Box>
            </Box>
            <FlatList 
                scrollEnabled={false}
                numColumns={2}
                keyExtractor={(item, index) => index}
                data={novels}
                renderItem={renderNovel}
                ItemSeparatorComponent={() => <Box height={20} />}
            />
        </Box>
    )
}

export default NovelList