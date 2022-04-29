import React from 'react'
import NavigationView from './src/modules/navigation/NavigationView'
import 'react-native-gesture-handler'
import Toast from 'react-native-toast-message';
import { UserStore } from './src/context/UserContext';

const App = () => {
  
  return (
    <>
      <UserStore>
        <NavigationView />
        <Toast topOffset={15} />
      </UserStore>
    </>
  )
}

export default App;
