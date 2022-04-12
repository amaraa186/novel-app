import React, { useState } from 'react'
import { View, ScrollView, TextInput } from 'react-native'
import { Box, Text } from '../../components'
import SearchItem from './SearchItem'
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

const SearchView = (props) => {
    const { navigation } = props
    const [search, setSearch] = useState("")

    const onNovelPressed = () => {
        navigation.navigate('NovelDetail')
    }

    const [value, setValue] = useState('')
    return (
        <Box pY={4} pX={4} mB={45}>
            <Box pX={8}>
                <TextInput 
                    placeholder='Хайх утгаа оруулна уу'
                    value={value}
                    onChangeText={setValue}
                />
            </Box>
            <ScrollView contentContainerStyle={{
                    padding: 10
                }}>
                {
                    novels.map((novel, i) => (
                        <SearchItem 
                            novel={novel}
                            onPress={onNovelPressed}
                        />
                    ))
                }
            </ScrollView>
        </Box>
    )
}

export default SearchView