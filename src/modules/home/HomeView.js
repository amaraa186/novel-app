import React from 'react'
import { View, ScrollView } from 'react-native'
import { Box, Text } from '../../components'

import NovelList from '../novel/NovelList'
import FeaturedNovels from '../novel/FeaturedNovels'

const HomeView = (props) => {
    const { navigation } = props

    const onNovelPressed = () => {
        navigation.navigate('ChapterDetail')
    }

    return (
        <Box flex={1} bg='white' insetsTop>
            <ScrollView contentContainerStyle={{
                paddingBottom: 60
            }}>
                <Box pX={8} bg='white'>
                    <Box pX={8} mT={20} mB={12}>
                        <Text h2 font='bold'>Оюуны алжаалаа тайл</Text>
                    </Box>
                </Box>

                <FeaturedNovels />

                <NovelList 
                    onNovelPressed={onNovelPressed}
                />
            </ScrollView>
        </Box>
    )
}

export default HomeView