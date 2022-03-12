import React, { useState, useEffect } from 'react'
import { Image, TouchableOpacity, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Box } from '../../components'
import NovelItem from './NovelItem'
import { fetchNovels } from './NovelApi'
import { fetchCategories } from './CategoryApi'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

const NovelList = (props) => {
    const [pickedCategory, setPickedCategory] = useState()
    const [novels, setNovels] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getNovels()
    }, [])

    useEffect(() => {
        getCategories()
    }, [])

    const getNovels = () => {
        fetchNovels()
        .then((res) => {
            if(res.data.code == 0) {
                setNovels(res.data.novels)
            }
        }).catch((err) => console.log(err))
    }

    const getCategories = () => {
        fetchCategories()
        .then((res) => {
            if(res.data.code == 0) {
                setCategories(res.data.categories)
            }
        }).catch((err) => console.log(err))
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
                        novels.map((novel, i) => (
                            <NovelItem 
                                novel={novel}
                                onPress={props.onchapterPressed}
                            />
                        ))
                    }
                </Box>
            </ScrollView>
        </Box>
    )
}

export default NovelList