import React from 'react'
import { ScrollView, View, TouchableOpacity, DrawerLayoutAndroid } from 'react-native'
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

const BookmarkView = () => {
    return (
        <Box direction='row'>
            {
                novels.map((novel, i) => (
                    <Box>
                        
                    </Box>
                ))
            }
        </Box>
    )
}

export default BookmarkView