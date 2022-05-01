import React, { useState, useContext } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'
import _ from 'lodash'
import Toast from 'react-native-toast-message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserContext from '../../context/UserContext'

const LoginPage = (props) => {

    const onSignup = () => {
        props.navigation.navigate('SignupPage')
    }

    const state = useContext(UserContext)

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

        state.login(email, password)
    }

    const onClose = () => {
        props.navigation.navigate('Home')
    }

    return (
        <Box jc='evenly' flex={1}>
            <Box style={{ position: 'absolute', top: 15, right: 0, zIndex: 2 }}>
                <Box direction='row' jc='end' pX={20}>
                    <TouchableOpacity onPress={onClose}>
                        <MaterialCommunityIcons name="close" size={22} color="black" />
                    </TouchableOpacity>
                </Box>
            </Box>
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