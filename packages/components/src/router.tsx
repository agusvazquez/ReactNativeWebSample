import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/home.screen'

const Stack = createStackNavigator()

const NAV_OPTIONS_DEFAULT = {
  headerTintColor: 'black',
  headerBackTitleStyle: {
    fontFamily: 'Aeonik-Regular',
  },
  headerTitleStyle: {
    color: 'black',
    fontFamily: 'Aeonik-Regular',
  },
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={NAV_OPTIONS_DEFAULT}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
