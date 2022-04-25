import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'
import { loginHandler } from './AuthApi'
import _ from 'lodash'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = (props) => {

    const onSignup = () => {
        props.navigation.navigate('SignupPage')
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLoginHandler = () => {
        if(_.isEmpty(email))
            return Toast.show({
                type: 'error',
                text1: 'Алдаа',
                text2: 'Имэйл хаягаа оруулна уу'
              });

        if(_.isEmpty(password))
            return Toast.show({
                type: 'error',
                text1: 'Алдаа',
                text2: 'Нууц үгээ оруулна уу'
            });

        loginHandler({
            email,
            password
        })
        .then((res) => {
            if(res.data.code != 0){
                return Toast.show({
                    type: 'error',
                    text1: 'Алдаа',
                    text2: res.data.data
                });
            }

            if(res.data.code == 0){
                const { user, token } = res.data;

                try {
                    AsyncStorage.setItem('token', token);
                    AsyncStorage.setItem("user", JSON.stringify(user))
                
                    return props.navigation.navigate('Home')
                } catch (err) {
                    console.log(err)
                }
            }
        }).catch((err) => console.log(err))
    }

    return (
        <Box insertsTop align='center' jc='evenly' flex={1} insertsBottom>
            <Box align='center'>
                <Box jc='center'>
                    <Text h1 font='bold'>Нэвтрэх</Text>
                </Box>
                <Box align='center'>
                    <Box pY={6}>
                        <TextInput 
                            placeholder='Имэйл хаяг'
                            value={email}
                            onChangeText={setEmail}
                            keyboardType='email-address'
                            style={{
                                backgroundColor: 'white',
                                width: 300,
                            }}
                        />
                    </Box>
                    <Box pY={6}>
                        <TextInput 
                            placeholder='Нууц үг'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            style={{
                                backgroundColor: 'white',
                                width: 300,
                            }}
                        />
                    </Box>
                </Box>
                <Box pY={8}>
                    <TouchableOpacity onPress={onLoginHandler}>
                        <Box bg='red' pY={12} pX={12} width={220}>
                            <Text color='white' align='center' h2>Нэвтрэх</Text>
                        </Box>
                    </TouchableOpacity>
                </Box>
            </Box>
            <Box align='center' pY={12}>
                <Box pY={12} direction='row'>
                    <Text>Бүртгүүлж амжаагүй л байна уу? </Text>
                    <TouchableOpacity onPress={onSignup}>
                        <Text font='bold'>Бүртгүүлэх</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Box>
    )
}

export default LoginPage