import React, { useState } from 'react'
import { loginHandler } from '../modules/login/AuthApi'

const UserContext = React.createContext()

export const UserStore = props => {
    const [isLogged, setIsLogged] = useState(true);
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

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
        <UserContext.Provider value={{isLogged, setIsLogged, token, setToken, login, user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}   

export default UserContext