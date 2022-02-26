import React from 'react'
import { Image, TouchableOpacity, ScrollView } from 'react-native'
import { Box } from '../../components'
import NovelItem from './NovelItem'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

const NovelList = (props) => {
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
    }, {
        _id: "123",
        title: "Хуйларч буй луу",
        total_chapter: 19,
        cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
        duration: 300,
        rating: 5.0,
        author: "I eat tomatoes"
    }]

    return (
        <Box insetsTop mB={20}>
            <Box pY={4} pX={4} direction='row'>
                <TouchableOpacity onPress={props.navigation.goBack}>
                    <MaterialCommunityIcons name='chevron-left' size={30} color='black' />
                </TouchableOpacity>
                
            </Box>
            <ScrollView contentContainerStyle={{
                padding: 10
            }}>
                <Box flex={1} pY={4} pX={4}>
                    {
                        novels.map((novel, i) => (
                            <NovelItem 
                                novel={novel}
                                onPress={props.onchapterPressed}
                            />
                        ))
                    }
                </Box>
            </ScrollView>
        </Box>
    )
}

export default NovelList