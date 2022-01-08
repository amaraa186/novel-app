import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

import HomeView from '../home/HomeView'
import SearchView from '../search/SearchView'
import BookmarkView from '../bookmark/BookmarkView'

import ChapterDetail from '../novel/ChapterDetail';

const TabView = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Search" component={SearchView} options={{ headerShown: false }} />
            <Tab.Screen name="Home" component={HomeView} options={{ headerShown: false }} />
            <Tab.Screen name="Bookmark" component={BookmarkView} />
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationView