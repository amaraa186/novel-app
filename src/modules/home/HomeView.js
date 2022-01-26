import React from 'react'
import { View, ScrollView } from 'react-native'
import { Box, Text } from '../../components'

import ChapterList from '../novel/ChapterList'
import FeaturedNovels from '../novel/FeaturedNovels'

import NovelSwiperList from '../novel/NovelSwiperList'

const HomeView = (props) => {

    const { navigation } = props

    const onchapterPressed = () => {
        navigation.navigate('ChapterDetail')
    }

    const onNovelPressed = () => {
        navigation.navigate('NovelDetail')
    }

    return (
        <Box flex={1} bg='white' insetsTop pX={10}>
            <ScrollView contentContainerStyle={{
                paddingBottom: 60
            }}>
                <Box pX={8} bg='white'>
                    <Box pX={8} mT={20} mB={12}>
                        <Text h2 font='bold'>Оюуны алжаалаа тайл</Text>
                    </Box>
                </Box>

                <FeaturedNovels />

                <NovelSwiperList
                    onNovelPressed={onNovelPressed}
                />

                <ChapterList 
                    onchapterPressed={onchapterPressed}
                />
            </ScrollView>
        </Box>
    )
}

export default HomeView