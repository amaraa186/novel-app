import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'

const NovelSwiperItem = (props) => {

    const { novel, onPress = () => {} } = props

    return (
        <Box pX={5}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => onPress(novel._id)}>
                <Box bR={20}>
                    <Box height={180} width={120}>
                        <Image 
                            source={{
                                uri: novel.cover_url
                            }}
                            style={{
                                flex: 1,
                                width: null,
                                height: null,
                                borderRadius: 20
                            }}
                        />
                    </Box>
                </Box>
                <Box width={120}>
                    <Text align='center' >{novel.title}</Text>
                </Box>
            </TouchableOpacity>
        </Box>
    )
}

export default NovelSwiperItem