import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

import HomeView from '../home/HomeView'
import SearchView from '../search/SearchView'
import BookmarkView from '../bookmark/BookmarkView'

import ChapterDetail from '../novel/ChapterDetail';

import NovelDetail from '../novel/NovelDetail'

const TabView = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Search" component={SearchView} options={{ headerShown: false, tabBarLabel: "Search", tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="search" color={color} size={size} /> 
            ) }} />
            <Tab.Screen name="Home" component={HomeView} options={{ headerShown: false, tabBarLabel: "Home", tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} /> 
            ) }} />
            <Tab.Screen name="Bookmark" component={BookmarkView} options={{ headerShown: false, tabBarLabel: "Bookmark", tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="bookmark" color={color} size={size} /> 
            ) }}/>
        </Tab.Navigator>
    )
}

const NavigationView = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={TabView} options={{ headerShown: false }} />
                <Stack.Screen name="ChapterDetail" component={ChapterDetail} options={{ headerShown: false }}/>
                <Stack.Screen name="NovelDetail" component={NovelDetail} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationView