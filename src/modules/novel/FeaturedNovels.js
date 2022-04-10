import React, { useState, useEffect } from 'react'
import { TabView } from 'react-native-tab-view'
import { View, useWindowDimensions } from 'react-native';
import { Box } from '../../components'
import NovelSwiper from './NovelSwiper'

const FeaturedNovels = (props) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes, setRoutes] = React.useState([])

    useEffect(() => {
        getNovels()
    }, [])

    const getNovels = () => {
        let novels = [{
            _id: "62247129b69c0bcf1463a02a",
            title: "Хуйларч буй луу",
            cover_url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b1089c6-bacb-4d88-8a75-3692aff4c6b1/dd5nhpo-577cb17c-64e9-42e4-80e1-f023fb453fc8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViMTA4OWM2LWJhY2ItNGQ4OC04YTc1LTM2OTJhZmY0YzZiMVwvZGQ1bmhwby01NzdjYjE3Yy02NGU5LTQyZTQtODBlMS1mMDIzZmI0NTNmYzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ub8v1buu19RL1c7IbRMPkecTLLBaZjC5t_Q0mlFYeLI',
        }, {
            _id: "62247605b69c0bcf1463a02e",
            title: "Луун тэмдэгт дайны бурхан",
            cover_url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b1089c6-bacb-4d88-8a75-3692aff4c6b1/ddobza7-90801710-5586-4b69-b4ba-529ae3d0cb31.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViMTA4OWM2LWJhY2ItNGQ4OC04YTc1LTM2OTJhZmY0YzZiMVwvZGRvYnphNy05MDgwMTcxMC01NTg2LTRiNjktYjRiYS01MjlhZTNkMGNiMzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3dSb7BAQHRsuTRU_YK2VHkpxn0mCgz-8JSzVwEkCRRQ",
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
                onPress={props.onNovelPressed}
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