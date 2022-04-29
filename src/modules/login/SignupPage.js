import React, { useState } from 'react'
import { Box, Text } from '../../components'
import { TextInput, TouchableOpacity } from 'react-native'
import Toast from 'react-native-toast-message';
import _ from 'lodash'
import { signupHandler } from './AuthApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupPage = (props) => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')

    const onLogin = () => {
        props.navigation.navigate('LoginPage')
    }

    const onSignUpHandler = () => {
        if(password !== password1)
            return Toast.show({
                type: 'error',
                text1: 'Алдаа',
                text2: 'Ижил нууц үг оруулна уу'
              });
        
        if(_.isEmpty(email))
            return Toast.show({
                type: 'error',
                text1: 'Алдаа',
                text2: 'Имэйл хаягаа оруулна уу'
              });
        
        if(_.isEmpty(username))
            return Toast.show({
                type: 'error',
                text1: 'Алдаа',
                text2: 'Нэрээ оруулна уу'
            });

        if(_.isEmpty(password) || _.isEmpty(password1))
            return Toast.show({
                type: 'error',
                text1: 'Алдаа',
                text2: 'Нууц үгийн талбарыг бөглөнө үү'
              });
        
        signupHandler({
            username,
            email,
            password
        })
        .then((res) => {
            if(res.data.code != 0){
                return Toast.show({
                    type: 'error',
                    text1: 'Алдаа',
                    text2: 'Бүртгэлтэй имэйл хаяг байна'
                  });
            }

            if(res.data.code == 0){
                const { user, token } = res.data

                try {
                    AsyncStorage.setItem('token', JSON.stringify(token));
                    AsyncStorage.setItem("user", JSON.stringify(user))
                    Toast.show({
                        type: 'success',
                        text1: 'Баяр хүргэе',
                        text2: 'Та амжилттай бүртгүүллээ'
                    });
                    return props.navigation.navigate('Home')
                } catch (err) {
                    console.log(err)
                }
            }

            return Toast.show({
                type: 'error',
                text1: 'Алдаа',
                text2: 'Нууц үг эсвэл имэйл хаяг буруу байна.'
              });

        }).catch((err) => console.log(err))
    }

    return (
        <Box insertsTop flex={1} insertsBottom jc='evenly'>
            <Box align='center'>
                <Box jc='center'>
                    <Text h1 font='bold'>Бүртгүүлэх</Text>
                </Box>
                <Box pY={6}>
                    <TextInput 
                        placeholder='Хэрэглэгчийн нэр'
                        value={username}
                        onChangeText={setUsername}
                        style={{
                            backgroundColor: 'white',
                            width: 300,
                        }}
                    />
                </Box>
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
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        style={{
                            backgroundColor: 'white',
                            width: 300,
                        }}
                    />
                </Box>
                <Box pY={6}>
                    <TextInput 
                        placeholder='Нууц үгээ давтан оруулна уу'
                        value={password1}
                        secureTextEntry={true}
                        onChangeText={setPassword1}
                        style={{
                            backgroundColor: 'white',
                            width: 300,
                        }}
                    />
                </Box>
                <Box pY={8}>
                    <TouchableOpacity onPress={onSignUpHandler}>
                        <Box bg='red' pY={12} pX={12} width={220}>
                            <Text color='white' align='center' h2>Бүртгүүлэх</Text>
                        </Box>
                    </TouchableOpacity>
                </Box>
            </Box>
            <Box align='center' pY={12}>
                <Box pY={12} direction='row'>
                    <Text>Хэдийнээ бүртгүүлчихсэн үү? </Text>
                    <TouchableOpacity onPress={onLogin}>
                        <Text font='bold'>Нэвтрэх</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Box>
    )
}

export default SignupPage