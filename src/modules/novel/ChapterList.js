import React, { useState, useEffect } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'

import ChapterItem from './ChapterItem'

const ChapterList = (props) => {
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
            duration: 15,
            progress: 70
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15,
            progress: 100
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15,
            progress: 37
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15,
            progress: 70
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15,
            progress: 70
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15,
            progress: 70
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15,
            progress: 70
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15,
            progress: 70
        }]

        setNovels(novels)
    }

    const renderNovel = ({ item }) => {
        return (
            <ChapterItem 
                novel={item}
                onPress={props.onchapterPressed}
            />  
        )
    }

    return (
        <Box flex={1}>
            <Box direction="row" pX={8} pY={15} jc='between' align='center'>
                <Box>
                    <Text h2>Сүүлд нэмэгдсэн</Text>
                </Box>
                <Box>
                    <TouchableOpacity>
                        <Text h4 color='gray'>Бүгдэнг нь үзэх</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
            <FlatList 
                scrollEnabled={false}
                keyExtractor={(item, index) => index}
                data={novels}
                renderItem={renderNovel}
                ItemSeparatorComponent={() => <Box height={20} />}
            />
        </Box>
    )
}

export default ChapterList