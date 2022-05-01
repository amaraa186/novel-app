import React, { useState, useEffect } from 'react'
import { Image, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Box, Text } from '../../components'
import { Rating } from 'react-native-ratings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash'

const NovelItem = (props) => {
    const { novel, onPress = () => {} } = props

    return (
        <Box bg='white' bR={20} pY={4} pX={6}>
            <TouchableOpacity onPress={() => onPress(novel._id)}>
                <Box direction='row' mT={4}>
                    <Box height={100} width={90} bR={20}>
                        <Image 
                            source={{
                                uri: novel.cover_url,
                            }}
                            style={{
                                flex: 1,
                                borderRadius: 20
                            }}
                        />
                    </Box>
                    <Box pX={12} pY={10} flex={1}>
                        <Box direction='row' jc='between'>
                            <Text color='gray'>{novel.total_chapter} бүлэг</Text>
                        </Box>
                        <Box mT={8}>
                            <Text font='bold' numberOfLines={1}>{novel.title}</Text>
                        </Box>
                        <Box mT={4}>
                            <Text color='gray'>Зохиолч: {novel.author} </Text>
                        </Box>
                    </Box>
                </Box>
            </TouchableOpacity>
        </Box>
    )
    
}

export default NovelItem