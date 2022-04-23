import React from 'react'
import NavigationView from './src/modules/navigation/NavigationView'
import 'react-native-gesture-handler'
import Toast from 'react-native-toast-message';

const App = () => {
  
  return (
    <>
      <NavigationView />
      <Toast topOffset={15} />
    </>
  )
}

export default App;
