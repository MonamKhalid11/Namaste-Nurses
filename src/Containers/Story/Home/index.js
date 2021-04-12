//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { CustomLayout, CustomButton } from '@/Components'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Headings from './Components/Heading'
import { getNurseFeed, UpdateDeviceTokenDetails } from '../../../Store/actions'
import { showToast, isOnline, deviceInformation } from '../../../Services/index'
import { Colors } from '../../../Theme';

import messaging from '@react-native-firebase/messaging';

// create a component
const Home = (props) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const [laoding, setLoading] = useState(false)
    useEffect(() => {
        deviceInformation(async (device) => {
            const token = await messaging().getToken();
            console.log("success device info", token)
            console.log("showing user here", user)
            const data = new FormData();
            data.append('token', 'j56sugRk029Po5DB');
            data.append('appuser_id', parseInt(user.id));
            data.append('device_id', device.id);
            data.append('device_name', device.name);
            data.append('device_os', device.device_os);
            data.append('device_os_version', device.device_os_version);
            data.append('app_version', 25);
            data.append('app_version_name', device.app_version);
            data.append('gcm_token', token);
            data.append('user_id', parseInt(user.id));
            console.log("showing user data", data)

            dispatch(UpdateDeviceTokenDetails(data))
        })
    }, [])

    fetchFeed = () => {
        props.navigation.navigate('Feed')
    }
    const toggleDrawer = () => props.navigation.toggleDrawer();

    return (

        <CustomLayout
            drawerOnPress={toggleDrawer}
        >
            <Headings />
            <CustomButton
                onPress={() => props.navigation.navigate('MarkAttendance')}
                title={t('home.button1')}
            />
            <CustomButton
                title={t('home.button2')}
                onPress={fetchFeed}
            />
        </CustomLayout>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
//make this component available to the app
export default Home;
