import React, { useState, useEffect } from 'react'
import { Image, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Box, Text } from '../../components'
import { Rating } from 'react-native-ratings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash'

const NovelItem = (props) => {
    const { novel, onPress = () => {}, onBookMark = () => {} } = props
    const [bookmark, setBookmark] = useState(false)
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        matchBookMark()
    }, [])

    const changeBookMark = (id) => {
        setBookmark(!bookmark)
        onBookMark(id)
    }

    const matchBookMark = async () => {
        try {
            let value = await AsyncStorage.getItem(`@bookmark`)
            let parseA = JSON.parse(value);
            
            setFetching(true)

            let someArray = _.includes(parseA, novel._id)

            if(someArray == true)
                setBookmark(someArray)

            setFetching(false)

        } catch (error) {
            console.log(error)
        }
    }

    if(fetching == true){
        return (
            <View style={{alignContent: 'center', justifyContent: 'center', flex: 1}}>
                <ActivityIndicator />
            </View>
        )
    } else {
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
                                <TouchableOpacity onPress={() => changeBookMark(novel._id)}>
                                    <MaterialCommunityIcons name={bookmark == false ? 'bookmark-outline' : 'bookmark'} color='black' size={23} />
                                </TouchableOpacity>
                            </Box>
                            <Box mT={8}>
                                <Text font='bold'>{novel.title}</Text>
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
}

export default NovelItem