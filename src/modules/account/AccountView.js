import React, { useState, useEffect, useContext } from 'react'
import { Box, Text } from '../../components'
import { TouchableOpacity, Image, View, ActivityIndicator } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash'
import UserContext from '../../context/UserContext';

const AccountView = (props) => {

    const { navigation } = props

    const state = useContext(UserContext)

    const onBookmarkPress = () => {
        navigation.navigate({
            name: 'Bookmark',
            params: {
                _id: state.user._id,
            }
        })
    }

    const onClickButton = () => {
        
        if(state.isLogged == true) {
           return state.logout()
        }

        return navigation.navigate('LoginMain')

    }

    return (
        <Box flex={1} insetsTop insetsBottom>
            <Box bg='red' pY={12} pX={6} flex={1} jc='center' align='center'>
                <Box height={150} width={150}>
                    <Image 
                        source={{
                            uri: 'https://www.teahub.io/photos/full/39-396452_anime-profile-picture-girl.jpg',
                        }}
                        style={{
                            borderRadius: 75,
                            flex: 1,
                            width: null,
                            height: null,
                        }}
                    />
                </Box>
                <Box pY={6} />
                {
                    state.isLogged == true && state.user.username != null && (
                        <Text color='white'>{state.user.username}</Text>
                    )
                }
            </Box>
            <Box flex={1} jc='between'>
                <Box>
                    <TouchableOpacity onPress={() => onBookmarkPress()}>
                        <Box bg='white' pY={8} height={50} direction='row' jc='between' align='center'>
                            <Box direction='row' pX={8}>
                                <MaterialCommunityIcons name='bookshelf' size={22} color='black' />
                                <Box width={8} />
                                <Text>Хадгалсан номнууд</Text>
                            </Box>
                            <MaterialCommunityIcons name='chevron-right' size={22} color='black' />
                        </Box>
                    </TouchableOpacity>
                </Box>
                <Box pY={12} pX={12}>
                    <TouchableOpacity onPress={onClickButton}>
                        <Box bg='red' pX={12} pY={10} bR={12}>
                            <Text color='white' font='bold' align='center' h3>{state.isLogged == true ? 'Гарах' : 'Нэвтрэх'}</Text>
                        </Box>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Box>
    )
}

export default AccountView