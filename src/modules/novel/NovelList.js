import React, { useState, useEffect } from 'react'
import { TouchableOpacity, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Box } from '../../components'
import NovelItem from './NovelItem'
import { fetchFilter, fetchUserNovels } from './NovelApi'
import { fetchCategories } from './CategoryApi'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash'

const NovelList = (props) => {
    const [pickedCategory, setPickedCategory] = useState('ALL')
    const [novels, setNovels] = useState([])
    const [categories, setCategories] = useState([])
    const [fetching, setFetching] = useState(false)
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)

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
        setFetching(true)
        fetchFilter({search_value: pickedCategory})
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

    const onLoadMore = () => {
        if(page + 1 <= pages){
            fetchFilter({ search_value: pickedCategory, page: page + 1 })
            .then((res) => {
                if(res.data.code == 0) {
                    setNovels(novels.concat(res.data.novels.docs))
                    setPages(res.data.novels.pages)
                    setPage(res.data.novels.page)
                }
            }).catch((err) => console.log(err))
        }
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
                            <Picker.Item label={category.title} value={category.title} key={i} />
                        ))
                    }
                </Picker>
            </Box>
            <FlatList 
                keyExtractor={(item, index) => index}
                data={novels}
                renderItem={renderNovel}
                onEndReachedThreshold={0.3}
                onEndReached={onLoadMore}
                ItemSeparatorComponent={() => <Box height={12} />}
            />
        </Box>
    )
}

export default NovelList