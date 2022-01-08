import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'

const NovelItem = (props) => {
    const { novel, onPress = () => {} } = props

    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
            <Box flex={1} pX={8}>
                <Box height={200} bR={20}>
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
                    <View style={{
                        position: 'absolute',
                        bottom: 8,
                        left: 12,
                        right: 12
                    }}> 
                        <Box direction='row' jc='between'>
                            <Box bg='white' bR={10} pX={8} mR={8}>
                                <Text>{novel.duration} мин</Text>
                            </Box>
                            <Box bg='white' bR={10} pX={8}>
                                <Text>{novel.chapter} бүлэг</Text>
                            </Box>
                        </Box>
                    </View>
                </Box>
                <Box mT={4}>
                    <Text>{novel.title}</Text>
                </Box>
            </Box>
        </TouchableOpacity>
    )
}

export default NovelItem