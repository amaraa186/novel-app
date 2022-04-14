import React from 'react'
import NavigationView from './src/modules/navigation/NavigationView'
import 'react-native-gesture-handler'
import { AsyncStorage } from 'react-native'

AsyncStorage.setItem('ThemeColor', true)

const App = () => {
  
  return (
    <NavigationView />
  )
}

export default App;
