import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/home.screen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

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

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={NAV_OPTIONS_DEFAULT}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Home2" component={HomeScreen} />
    </Stack.Navigator>
  )
}

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TabHome" component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router
