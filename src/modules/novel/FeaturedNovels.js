import React, { useState, useEffect } from 'react'
import { TabView, SceneMap } from 'react-native-tab-view'
import { View, useWindowDimensions } from 'react-native';
import { Box } from '../../components'
import NovelSwiper from './NovelSwiper'

const FeaturedNovels = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes, setRoutes] = React.useState([])

    const [fetching, setFetching] = useState(false)
    const [novels, setNovels] = useState([])

    const [filter, setFilter] = useState('recent') //popular

    useEffect(() => {
        getNovels()
    }, [])

    const getNovels = () => {
        let novels = [{
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15
        }, {
            _id: "123",
            title: "Хуйларч буй луу",
            chapter: "19",
            cover_url: "https://img.webnovel.com/bookcover/8094085105004705/300/300.jpg?updateTime=1552557356092",
            duration: 15
        }]

        //setNovels(novels)

        setRoutes(novels.map((novel, index) => {
            return {
                key: index,
                title: novel.title,
                novel: novel,
            }
        }))
    }

    const renderScene = ({ route }) => {
        return (
            <NovelSwiper 
                novel={route.novel}
            />
        )
    }

    return (
        <Box height={200}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={() => null}
                initialLayout={{ width: layout.width }}
            />
        </Box>
    )
}

export default FeaturedNovels