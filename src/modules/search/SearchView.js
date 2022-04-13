import React, { useState, useEffect } from 'react'
import { View, ScrollView, TextInput } from 'react-native'
import { Box, Text } from '../../components'
import SearchItem from './SearchItem'
import { fetchSearch } from '../novel/NovelApi'

const SearchView = (props) => {
    const { navigation } = props
    const [novels, setNovels] = useState([])
    const [value, setValue] = useState('')

    const onNovelPressed = (id) => {
        navigation.navigate('NovelDetail', {
            _id: id
        })
    }

    useEffect(() => {
        getNovels()
    }, [])

    useEffect(() => {
        getNovels()
    }, [value])

    const getNovels = () => {
        fetchSearch(value)
        .then((res) => {
            if(res.data.code == 0) {
                setNovels(res.data.novels)
            }
        }).catch((err) => console.log(err))
    }

    return (
        <Box pY={4} pX={4} mB={45}>
            <Box pX={8}>
                <TextInput 
                    placeholder='Хайх утгаа оруулна уу'
                    value={value}
                    onChangeText={setValue}
                />
            </Box>
            <ScrollView contentContainerStyle={{
                    padding: 10
                }}>
                {
                    novels.map((novel, i) => (
                        <SearchItem 
                            novel={novel}
                            onPress={onNovelPressed}
                        />
                    ))
                }
            </ScrollView>
        </Box>
    )
}

export default SearchView