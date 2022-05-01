import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

import HomeView from '../home/HomeView'
import SearchView from '../search/SearchView'
import BookmarkView from '../bookmark/BookmarkView'
import AccountView from '../account/AccountView'
import ChapterDetail from '../chapter/ChapterDetail';
import NovelList from '../novel/NovelList'
import NovelDetail from '../novel/NovelDetail'
import LoginPage from '../login/LoginPage';
import SignupPage from '../login/SignupPage';
import LoginMain from '../login/LoginMain';

const TabView = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Search" component={SearchView} options={{ headerShown: false, tabBarLabel: "Хайлт", tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="magnify" color={color} size={size} /> 
            ) }} />
            <Tab.Screen name="Home" component={HomeView} options={{ headerShown: false, tabBarLabel: "Нүүр", tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} /> 
            ) }} />
            <Tab.Screen name="Account" component={AccountView} options={{ headerShown: false, tabBarLabel: "Хувийн хэсэг", tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="account" color={color} size={size} /> 
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
                <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }}/>
                <Stack.Screen name="SignupPage" component={SignupPage} options={{ headerShown: false }}/>
                <Stack.Screen name="NovelDetail" component={NovelDetail} options={{ headerShown: false }}/>
                <Stack.Screen name="NovelList" component={NovelList} options={{ headerShown: false }}/>
                <Stack.Screen name="Bookmark" component={BookmarkView} options={{ headerShown: false }}/>
                <Stack.Screen name="LoginMain" component={LoginMain} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationView