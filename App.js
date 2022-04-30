import React from 'react'
import NavigationView from './src/modules/navigation/NavigationView'
import 'react-native-gesture-handler'
import Toast from 'react-native-toast-message';
import { UserStore } from './src/context/UserContext';
import { View } from 'react-native'

const App = () => {
  
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <UserStore>
        <NavigationView />
        <Toast topOffset={15} />
      </UserStore>
    </View>
  )
}

export default App;
