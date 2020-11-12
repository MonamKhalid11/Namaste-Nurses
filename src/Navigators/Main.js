import React from 'react'
import { IndexExampleContainer } from '@/Containers'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors } from '../Theme';
import CustomDrawer from '../Components/CustomDrawer'
import MarkAttendance from '../Containers/Story/MarkAttendance'
import AttendanceMarked from '../Containers/Story/AttendanceMarked'
import Feed from '../Containers/Story/Feed'
import Profile from '../Containers/Story/Profile'

const Drawer = createDrawerNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home"
      drawerPosition={'right'}
      drawerStyle={{
        width: 240,
        backgroundColor: Colors.white
      }}
      drawerContent={props => <CustomDrawer {...props} />}

    >
      <Drawer.Screen name="Home" component={IndexExampleContainer} options={{ headerShown: false }} />
      <Drawer.Screen name="MarkAttendance" component={MarkAttendance} options={{ headerShown: false }} />
      <Drawer.Screen name="AttendanceMarked" component={AttendanceMarked} options={{ headerShown: false }} />
      <Drawer.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
