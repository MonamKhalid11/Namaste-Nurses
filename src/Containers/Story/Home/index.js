//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomLayout, CustomButton } from '@/Components'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Headings from './Components/Heading'
import { getNurseFeed } from '../../../Store/actions'
import { showToast, isOnline } from '../../../Services/index'

// create a component
const Home = (props) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const [laoding, setLoading] = useState(false)
    fetchFeed = () => {
        if (user) {
            setLoading(true)
            isOnline((connected) => {
                dispatch(getNurseFeed(user.id, setLoading))
            }, (offline) => {
                setLoading(false)
                showToast(t('commonApp.internetError'))
            })
        }
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
                loading={laoding}
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
