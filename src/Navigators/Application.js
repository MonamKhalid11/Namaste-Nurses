import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer } from '@/Containers'
import { useSelector } from 'react-redux'
import MainNavigator from './Main'
const Stack = createStackNavigator()
// @refresh reset
const ApplicationNavigator = () => {
  const user = useSelector(state => state.auth.user)
  console.log("showing user here", user)
  return (
    <Stack.Navigator headerMode={'none'}>
      {user ?
        <Stack.Screen name="Main" component={MainNavigator} />
        :
        <>
          <Stack.Screen name="Startup" component={IndexStartupContainer} />
          <Stack.Screen name="Main" component={MainNavigator} />
        </>
      }
    </Stack.Navigator>
  )
}

export default ApplicationNavigator
