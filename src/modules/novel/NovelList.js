import React, { useState, useEffect } from 'react'
import { Image, TouchableOpacity, ScrollView, View, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Box } from '../../components'
import NovelItem from './NovelItem'
import { fetchFilter } from './NovelApi'
import { fetchCategories } from './CategoryApi'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash'

const NovelList = (props) => {
    const [pickedCategory, setPickedCategory] = useState('ALL')
    const [novels, setNovels] = useState([])
    const [categories, setCategories] = useState([])
    const [fetching, setFetching] = useState(false)

    const onNovelPressed = (id) => {
        props.navigation.navigate('NovelDetail', {
            _id: id
        })
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        getSearched()
    }, [pickedCategory])

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

    const onBookMark = async (id) => {
        try {
            let value = await AsyncStorage.getItem(`@bookmark`)
            let parseA = JSON.parse(value);
            if(parseA.length == 0 || parseA == null){
                alert('A')
                let array = [id]
                return AsyncStorage.setItem(`@bookmark`, JSON.stringify(array))
            }
            let findArray = parseA.find(find => find == id)

            if(_.isEmpty(findArray) == true){
                parseA.push(id)
                AsyncStorage.setItem(`@bookmark`, JSON.stringify(parseA))
            } else {
                let filteredArray = parseA.filter(pa => pa != id)
                AsyncStorage.setItem(`@bookmark`, JSON.stringify(filteredArray))
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box mB={45}>
            <Box pY={4} pX={4} direction='row' align='center'>
                <TouchableOpacity onPress={props.navigation.goBack}>
                    <MaterialCommunityIcons name='chevron-left' size={30} color='black' />
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
                        fetching == true ? (
                        <View style={{alignContent: 'center', justifyContent: 'center', flex: 1}}>
                            <ActivityIndicator />
                        </View> ) : 
                        novels.map((novel, i) => (
                            <NovelItem 
                                novel={novel}
                                onPress={onNovelPressed}
                                onBookMark={onBookMark}
                            />
                        ))
                    }
                </Box>
            </ScrollView>
        </Box>
    )
}

export default NovelList