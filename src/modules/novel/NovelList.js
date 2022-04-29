import React, { useState, useEffect } from 'react'
import { Image, TouchableOpacity, ScrollView, View, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Box } from '../../components'
import NovelItem from './NovelItem'
import { fetchFilter, fetchUserNovels } from './NovelApi'
import { fetchCategories } from './CategoryApi'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash'
import AsyncStorage from '@react-native-async-storage/async-storage';

const NovelList = (props) => {
    const [pickedCategory, setPickedCategory] = useState('ALL')
    const [novels, setNovels] = useState([])
    const [categories, setCategories] = useState([])
    const [fetching, setFetching] = useState(false)
    const [user, setUser] = useState({})

    const onNovelPressed = (id) => {
        props.navigation.navigate('NovelDetail', {
            _id: id
        })
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        checkBookmarks()
    }, [user])

    useEffect(() => {
        onGetUserID()
    }, [])

    const onGetUserID = async () => {
        try {
            setFetching(true)
            let userData = await AsyncStorage.getItem('user')

            if(!_.isEmpty(userData))
                setUser(JSON.parse(userData))

            setFetching(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSearched()
    }, [pickedCategory])

    const checkBookmarks = () => {
        setFetching(true)
        fetchUserNovels(user._id)
        .then((res) => {
            if(res.data.code == 0){
                // alert(res.data.bookmark)
                // _.difference(res.data.bookmark.novel, )
            }
        }).catch((err) => console.log(err))
        .then(() => setFetching(false))
    }

    const getCategories = () => {
        setFetching(true)
        fetchCategories()
        .then((res) => {
            if(res.data.code == 0) {
                setCategories(res.data.categories)
            }
        }).catch((err) => console.log(err))
        .then(() => setFetching(false))
    }

    const getSearched = () => {
        fetchFilter(pickedCategory)
        .then((res) => {
            if(res.data.code == 0) {
                setNovels(res.data.novels)
            }
        }).catch((err) => console.log(err))
    }

    if(fetching == true){
        return (
            <Box align='center' jc='center' flex={1}>
                <ActivityIndicator />
            </Box>
        )
    } 
    return (
        <Box mB={45}>
            <Box pY={4} pX={4} direction='row' align='center'>
                <TouchableOpacity onPress={props.navigation.goBack}>
                    <MaterialCommunityIcons name='chevron-left' size={22} color='black' />
                </TouchableOpacity>
                <Box width={25} />
                <Picker
                    selectedValue={pickedCategory}
                    style={{height: 40, width: 300}}
                    onValueChange={(itemValue, itemIndex) => setPickedCategory(itemValue)}
                >
                    <Picker.Item label='Бүгд' value='ALL' />
                    {
                        categories.map((category, i) => (
                            <Picker.Item label={category.title} value={category.title} />
                        ))
                    }
                </Picker>
            </Box>
            <ScrollView contentContainerStyle={{
                padding: 10
            }}>
                <Box flex={1} pY={4} pX={4}>
                    {
                        novels.map((novel, i) => (
                            <NovelItem 
                                novel={novel}
                                onPress={onNovelPressed}
                            />
                        ))
                    }
                </Box>
            </ScrollView>
        </Box>
    )
}

export default NovelList