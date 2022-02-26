import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../../components'

const ChapterItem = (props) => {
    const { novel, onPress = () => {} } = props

    return (
        <Box pX={8}>
            <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
                <Box direction='row' bR={20}>
                    <Box height={150} width={100} bR={20}>
                        <Image 
                            source={{
                                uri: novel.cover_url,
                            }}
                            style={{
                                flex: 1,
                                width: null,
                                height: null,
                                borderRadius: 20
                            }}
                        />
                    </Box>
                    <Box pX={10} pY={10} flex={1}>
                        <Box>
                            <Text color='gray'>Уншигдах хугацаа: {novel.duration} мин</Text>
                        </Box>
                        <Box mT={12}>
                            <Text font='bold'>{novel.title}</Text>
                        </Box>
                        <Box mT={4}>
                            <Text color='gray'>Бүлэг {novel.chapter}</Text>
                        </Box>
                        <Box pY={10} mT={5}>
                            <Box>
                                <Text align='right'>{novel.progress}%</Text>
                            </Box>
                            <Box>
                                <Box bg='gray' width='100%' height={10} />
                                <Box bg='red' style={{position: 'absolute'}} width={novel.progress + '%'} height={10}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </TouchableOpacity>
        </Box>
    )
}

export default ChapterItem