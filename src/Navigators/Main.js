import React from 'react'
import { IndexExampleContainer } from '@/Containers'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors } from '../Theme';
import CustomDrawer from '../Components/CustomDrawer'
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
      <Drawer.Screen name="Home" component={IndexExampleContainer} options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  )
}

export default MainNavigator
