import React, { useState, useEffect, useContext } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { Box, Text } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash'
import UserContext from '../../context/UserContext';

const LoginMain = (props) => {

    const onPressLogin = () => {
        props.navigation.navigate('LoginPage')    
    }

    const onPressSignUp = () => {
        props.navigation.navigate('SignupPage')
    }

    const state = useContext(UserContext)

    // useEffect(() => {

    //     setFetching(true)
    //     const isLogged = useContext(UserContext)

    //     if(isLogged == true)
    //         props.navigation.navigate('Home')

    //     setFetching(false)

    // }, [])

    if(state.isLogged == true){
        props.navigation.navigate('Home')
    }

    return (
        <Box flex={1} jc='center' align='center'>
            <Box height={150} width={120}>
                <Image 
                    source={require("../../../assets/images/loginMain.png")}
                    style={{
                        flex: 1,
                        width: null,
                        height: null,
                    }}
                />
            </Box>
            <Text h2 font='bold'>Оюуны алжаалаа тайл</Text>
            <Box height={12} />
            <Box pY={12}>
                <TouchableOpacity onPress={() => onPressLogin()}>
                    <Box bg='red' pY={12} pX={12} width={220}>
                        <Text color='white' align='center' h2>Нэвтрэх</Text>
                    </Box>
                </TouchableOpacity>
                <Box height={10} />
                <TouchableOpacity onPress={() => onPressSignUp()}>
                    <Box bg='white' pY={12} pX={12} width={220}>
                        <Text align='center' h2>Бүртгүүлэх</Text>
                    </Box>
                </TouchableOpacity>

            </Box>
        </Box>
    )
}

export default LoginMain