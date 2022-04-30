import React, { useState, useEffect } from 'react'
import { loginHandler, signupHandler } from '../modules/login/AuthApi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message';
import _ from 'lodash'
const UserContext = React.createContext()

export const UserStore = props => {
    const [isLogged, setIsLogged] = useState(false);
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        onCheck()
    }, [])

    const onCheck = async () => {
        try {
            let value = await AsyncStorage.getItem('token');
            let userdata = await AsyncStorage.getItem('user');

            if(!_.isEmpty(JSON.parse(value))){
                setIsLogged(true)
                setUser(JSON.parse(userdata))
            }

        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('token')
            await AsyncStorage.removeItem('user')
            setIsLogged(false)
            setToken(null)
            setUser(null)
            props.navigation.navigate('LoginMain')
        } catch (error) {
            console.log(error)
        }
    }

    const signup = (email, username, password) => {
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
                    setIsLogged(true)
                    setUser(user)
                    setToken(token)
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

            if(res.data.code != 0)
                return Toast.show({
                    type: 'error',
                    text1: 'Алдаа',
                    text2: 'Нууц үг эсвэл имэйл хаяг буруу байна.'
                });

        }).catch((err) => console.log(err))
    }

    const login = (email, password) => {
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
                    AsyncStorage.setItem('token', JSON.stringify(token));
                    AsyncStorage.setItem('user', JSON.stringify(user))
                    setIsLogged(true)
                    setUser(user)
                    setToken(token)
                    return props.navigation.navigate('Home')
                } catch (err) {
                    console.log(err)
                }
            }
        }).catch((err) => console.log(err))
    }

    return (
        <UserContext.Provider value={{isLogged, setIsLogged, token, setToken, login, user, logout, signup}}>
            {props.children}
        </UserContext.Provider>
    )
}   

export default UserContext