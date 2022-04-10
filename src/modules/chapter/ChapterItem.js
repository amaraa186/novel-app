import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'

const ChapterItem = (props) => {
    const { chapter, onPress = () => {} } = props

    return (
        <Box pX={8}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => onPress(chapter._id)}>
                <Box direction='row' bR={20}>
                    <Box height={130} width={90} bR={20}>
                        <Image 
                            source={{
                                uri: chapter.novel.cover_url,
                            }}
                            style={{
                                flex: 1,
                                width: null,
                                height: null,
                                borderRadius: 20
                            }}
                        />
                    </Box>
                    <Box pX={10} pY={6} flex={1}>
                        <Box>
                            <Text color='gray'>Уншигдах хугацаа: {chapter.duration ? chapter.duration : 0} мин</Text>
                        </Box>
                        <Box mT={12}>
                            <Text font='bold'>{chapter.novel.title}</Text>
                        </Box>
                        <Box mT={4}>
                            <Text color='gray'>Бүлэг {chapter.episode} - {chapter.title}</Text>
                        </Box>
                    </Box>
                </Box>
            </TouchableOpacity>
        </Box>
    )
}

export default ChapterItem