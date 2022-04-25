import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'

const LoginMain = (props) => {
    const onPressLogin = () => {
        props.navigation.navigate('LoginPage')    
    }

    const onPressSignUp = () => {
        props.navigation.navigate('SignupPage')
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