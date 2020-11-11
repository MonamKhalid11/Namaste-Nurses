//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomLayout, CustomButton } from '@/Components'
import { useTranslation } from 'react-i18next'
import Headings from './Components/Heading'
// create a component
const Home = (props) => {
    const { t } = useTranslation()

    const toggleDrawer = () => props.navigation.toggleDrawer();;

    return (
        <CustomLayout
            drawerOnPress={toggleDrawer}
        >
            <Headings />
            <CustomButton
                title={t('home.button1')}
            />
            <CustomButton
                title={t('home.button2')}
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
