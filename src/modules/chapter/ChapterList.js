import React, { useState, useEffect } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'
import { fetchRecentlyChapters } from "./ChapterApi"

import ChapterItem from './ChapterItem'

const ChapterList = (props) => {
    const [fetching, setFetching] = useState(false)
    const [chapters, setChapters] = useState([])

    useEffect(() => {
        getChapters()
    }, [])

    const getChapters = () => {
        fetchRecentlyChapters()
        .then((res) => {
            if(res.data.code == 0){
                setChapters(res.data.chapters)
            }
        }).catch((err) => console.log(err))
    }

    const renderChapter = ({ item }) => {
        return (
            <ChapterItem 
                chapter={item}
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
                    <TouchableOpacity onPress={props.onNovelListPressed}>
                        <Text h4 color='gray'>Бүгдэнг нь үзэх</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
            <FlatList 
                scrollEnabled={false}
                keyExtractor={(item, index) => index}
                data={chapters}
                renderItem={renderChapter}
                ItemSeparatorComponent={() => <Box height={20} />}
            />
        </Box>
    )
}

export default ChapterList