import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'
import { Rating } from 'react-native-ratings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

const SearchItem = (props) => {
    const { novel, onPress = () => {} } = props

    return (
        <Box pY={2}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => onPress(novel._id)}>
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
                        <Box direction='row' jc='between'>
                            <Text color='gray'>{novel.total_chapter} бүлэг</Text>
                            <TouchableOpacity onPress={() => alert("AA")}>
                                <MaterialCommunityIcons name='bookmark-outline' color='black' size={22} />
                            </TouchableOpacity>
                        </Box>
                        <Box mT={12}>
                            <Text font='bold' numberOfLines={1}>{novel.title}</Text>
                        </Box>
                        <Box mT={4}>
                            <Text color='gray'>Зохиолч: {novel.author} </Text>
                        </Box>
                        <Box pY={10} mT={5} direction='row' align='center'>
                            <Rating
                                startingValue={5}
                                ratingCount={5}
                                imageSize={20}
                                tintColor='#f2f2f2'
                                readonly
                                style={{alignItems: 'flex-start'}}
                            />
                            <Box width={10} />
                            <Text>
                                {novel.rating.toFixed(1)}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </TouchableOpacity>
        </Box>
    )
}

export default SearchItem