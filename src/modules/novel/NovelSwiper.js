import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Box } from '../../components'

const NovelSwiper = (props) => {
    const { novel } = props

    return (
        <Box height={200} bR={20} pX={8}>
            <TouchableOpacity style={{flex: 1}}>
                <Image 
                    source={{
                        uri: novel.cover_url,
                    }}
                    style={{
                        borderRadius: 20,
                        flex: 1,
                        width: null,
                        height: null,
                    }}
                />
            </TouchableOpacity>
        </Box>
    )
}

export default NovelSwiper