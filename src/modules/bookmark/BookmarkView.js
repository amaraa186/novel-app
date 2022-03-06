import React from 'react'
import { ScrollView, View, Image, TouchableOpacity, DrawerLayoutAndroid } from 'react-native'
import { Box, Text } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

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
    rating:  5.0,
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
    title: "Хуйларч буй луу bla sdhada akshd",
    total_chapter: 19,
    cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
    duration: 300,
    rating: 5.0,
    author: "I eat tomatoes"
}, {
    _id: "123",
    title: "Хуйларч буй луу bla sdhada akshd",
    total_chapter: 19,
    cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
    duration: 300,
    rating: 5.0,
    author: "I eat tomatoes"
}]

const BookmarkView = () => {
    return (
        <ScrollView contentContainerStyle={{
            padding: 10
        }}>
            <Box direction='row' style={{flexWrap: 'wrap'}}>
                {
                    novels.map((novel, i) => (
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
                    ))
                }
            </Box>
        </ScrollView>
    )
}

export default BookmarkView