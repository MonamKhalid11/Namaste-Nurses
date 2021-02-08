import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer } from '@/Containers'
import { useSelector } from 'react-redux'
import MainNavigator from './Main'
import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { Notifications } from 'react-native-notifications';
import { deviceInformation } from '../Services'
import States from '../Containers/Story/ShowStates'
var Smartlook = require('smartlook-react-native-wrapper');

const Stack = createStackNavigator()
// @refresh reset
const ApplicationNavigator = () => {
  const user = useSelector(state => state.auth.user)
  Smartlook.setupAndStartRecording("0d88942ba1e5be1951aec73a1b47b2a301d4fbaa");

  useEffect(() => {
    Init()
  }, [])
  async function Init() {
    await messaging().requestPermission({
      badge: true,
      sound: true,
      alert: true,
    });
    const token = await messaging().getToken();

  }


  Notifications.registerRemoteNotifications();

  Notifications.events().registerNotificationReceivedForeground(
    (notification, completion) => {
      console.log("showing notificaiton", notification)

      completion({ alert: true, sound: true, badge: true });
    },
  );

  Notifications.events().registerNotificationOpened(
    (notification, completion) => {
      console.log("showing notificaiton", notification)

      completion();
    },
  );

  messaging().onMessage(async (remoteMessage) => {
    console.log("showing notificaiton", remoteMessage)

    Notifications.postLocalNotification({
      ...remoteMessage.notification,
      data: remoteMessage.data,
    });
  });

  console.log("showing user here", user)
  return (
    <Stack.Navigator headerMode={'none'}>
      {user ?
        <>
          <Stack.Screen name="States" component={States} />
          <Stack.Screen name="Main" component={MainNavigator} />
        </>
        :
        <>
          <Stack.Screen name="Startup" component={IndexStartupContainer} />
          <Stack.Screen name="Main" component={MainNavigator} />
          <Stack.Screen name="States" component={States} />
        </>
      }
    </Stack.Navigator>
  )
}

export default ApplicationNavigator
