import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer } from '@/Containers'
import { useSelector } from 'react-redux'
import MainNavigator from './Main'
import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { Notifications } from 'react-native-notifications';
const Stack = createStackNavigator()
// @refresh reset
const ApplicationNavigator = () => {
  const user = useSelector(state => state.auth.user)
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
    console.log('TOKEN (getFCMToken)', token);
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
