import React from 'react'
import { ScrollView } from 'react-native'
import { Box, Text } from '../../components'

import ChapterList from '../chapter/ChapterList'
import FeaturedNovels from '../novel/FeaturedNovels'

import NovelSwiperList from '../novel/NovelSwiperList'

const HomeView = (props) => {

    const { navigation } = props

    const onchapterPressed = (id) => {
        navigation.navigate({
            name: 'ChapterDetail',
            params: {
                _id: id,
            },
            key: id
        })
    }

    const onNovelPressed = (id) => {
        navigation.navigate('NovelDetail', {
            _id: id
        })
    }

    const onNovelList = () => {
        navigation.navigate('NovelList')
    }

    return (
        <Box flex={1} bg='white' pX={10}>
            <ScrollView contentContainerStyle={{
                paddingBottom: 20
            }}>
                <Box pX={8} bg='white'>
                    <Box pX={8} mT={20} mB={12}>
                        <Text h2 font='bold'>Оюуны алжаалаа тайл</Text>
                    </Box>
                </Box>

                <FeaturedNovels 
                    onNovelPressed={onNovelPressed}
                />

                <NovelSwiperList
                    onNovelPressed={onNovelPressed}
                    onNovelListPressed={onNovelList}
                />

                <ChapterList 
                    onchapterPressed={onchapterPressed}
                    onNovelListPressed={onNovelList}
                />
            </ScrollView>
        </Box>
    )
}

export default HomeView