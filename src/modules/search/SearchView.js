import React, { useState, useEffect } from 'react'
import { TextInput, FlatList, ActivityIndicator } from 'react-native'
import { Box, Text } from '../../components'
import NovelItem from '../novel/NovelItem'
import { fetchSearch } from '../novel/NovelApi'

const SearchView = (props) => {
    const { navigation } = props
    const [novels, setNovels] = useState([])
    const [value, setValue] = useState('')
    const [fetching, setFetching] = useState(false)
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)

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
        setFetching(true)
        fetchSearch({ search_value: value })
        .then((res) => {
            if(res.data.code == 0) {
                setNovels(res.data.novels.docs)
                setPages(res.data.novels.pages)
                setPage(res.data.novels.page)
            }
        }).catch((err) => console.log(err))
        .then(() => setFetching(false))
    }

    const renderNovel = ({item}) => {
        return (
            <NovelItem 
                novel={item}
                onPress={onNovelPressed}
            />
        )
    }

    const handleLoadMore = () => {
        setPage(2)
    }

    if(fetching == true){
        return (
            <Box align='center' jc='center' flex={1}>
                <ActivityIndicator />
            </Box>
        )
    } 

    return (
        <Box flex={1} pX={12}>
            <Box pX={8}>
                <TextInput 
                    placeholder='Хайх утгаа оруулна уу'
                    value={value}
                    onChangeText={setValue}
                />
            </Box>
            <FlatList 
                keyExtractor={(item, index) => index}
                data={novels}
                renderItem={renderNovel}
                onEndReached={handleLoadMore}
                ItemSeparatorComponent={() => <Box height={12} />}
            />
        </Box>
    )
}

export default SearchView