import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../components'

const LoginPage = (props) => {

    const onSignup = () => {
        props.navigation.navigate('SignupPage')
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Box insertsTop align='center' jc='center' flex={1} style={{ backgroundColor: '#212129'}} insertsBottom>
            <Box align='center' flex={1} jc='end'>
                <Box jc='center'>
                    <Text h1 font='bold' color='white'>Нэвтрэх</Text>
                </Box>
                <Box align='center'>
                    <Box pY={8}>
                        <TextInput 
                            placeholder='Имэйл хаяг'
                            value={email}
                            onChangeText={setEmail}
                            style={{
                                backgroundColor: 'white',
                                width: 300,
                                borderRadius: 10,
                            }}
                        />
                    </Box>
                    <Box pY={8}>
                        <TextInput 
                            placeholder='Нууц үг'
                            value={password}
                            onChangeText={setPassword}
                            style={{
                                backgroundColor: 'white',
                                width: 300,
                                borderRadius: 10
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box align='center' jc='between' flex={1} pY={12}>
                <Box>
                    <TouchableOpacity>
                        <Box bg='red' pY={8} pX={8} width={200} bR={10}>
                            <Text color='white' align='center'>Нэвтрэх</Text>
                        </Box>
                    </TouchableOpacity>
                </Box>
                <Box pY={12} direction='row'>
                    <Text color='white'>Бүртгүүлж амжаагүй л байна уу? </Text>
                    <TouchableOpacity onPress={onSignup}>
                        <Text font='bold' color='white'>Бүртгүүлэх</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Box>
    )
}

export default LoginPage