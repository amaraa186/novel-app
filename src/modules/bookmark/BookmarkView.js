import React, { useState, useEffect } from 'react'
import { ScrollView, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchBookmarkedNovels } from './BookmarkApi'

const BookmarkView = (props) => {
    const [novels, setNovels] = useState([])
    const [fetching, setFetching] = useState(false)

    const onNovelPressed = (id) => {
        props.navigation.navigate('NovelDetail', {
            _id: id
        })
    }

    useEffect(() => {
        getNovels()
    }, [])

    const onBack = () => props.navigation.goBack()

    const getNovels = async () => {
        setFetching(true)

        fetchBookmarkedNovels(props.route.params._id)
        .then((res) => {
            if(res.data.code == 0) {
                alert(res.data.bookmark.novel)
            }
            console.log(res.data)
        }).catch((err) => console.log(err))
        .then(() => setFetching(false))
    }

    if(fetching == true){
        return (
            <View style={{alignContent: 'center', justifyContent: 'center', flex: 1}}>
                <ActivityIndicator />
            </View>
        )
    } else {
        return (
            <Box insetsTop insetsBottom>
                <Box pY={4} pX={8}>
                    <TouchableOpacity onPress={() => onBack()}>
                        <MaterialCommunityIcons name='chevron-left' size={22} color='black' />
                    </TouchableOpacity>
                </Box>
                <ScrollView contentContainerStyle={{
                padding: 10
                }}>
                    <Box direction='row' style={{flexWrap: 'wrap'}}>
                        {
                            novels.map((novel, i) => (
                                <TouchableOpacity onPress={() => onNovelPressed(novel._id)}>
                                    <Box pY={10} pX={6}>
                                        <Box width={115} height={160}>
                                            <Image
                                                source={{
                                                    uri: novel.cover_url,
                                                }}
                                                style={{
                                                    flex: 1,
                                                    width: null,
                                                    height: null,
                                                }}
                                            />
                                        </Box>
                                        <Box width={115}>
                                            <Text align='center'>{novel.title}</Text>
                                        </Box>
                                    </Box>
                                </TouchableOpacity>
                            ))
                        }
                    </Box>
                </ScrollView>
            </Box>
        )
    }
}

export default BookmarkView