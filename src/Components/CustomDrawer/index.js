//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { Common, Fonts, Gutters, Layout, WP, Images } from '@/Theme'
import DrawerIcon from './Components/DrawerIcon'
import PagesList from './Components/PagesList'
import { useTranslation } from 'react-i18next'

// create a component
const CustomDrawer = (props) => {
    const { t } = useTranslation()
    const [pages, setPages] = useState([
        {
            title: t('drawer.screen1'),
            id: Math.random()
        },
        {
            title: t('drawer.screen2'),
            id: Math.random()
        }, {
            title: t('drawer.screen3'),
            id: Math.random()
        }, {
            title: t('drawer.screen4'),
            id: Math.random()
        },
        {
            title: t('drawer.screen5'),
            id: Math.random()
        },
    ])

    const toggleDrawer = () => props.navigation.toggleDrawer();;
    return (
        <DrawerContentScrollView {...props}>
            <DrawerIcon
                openDrawer={toggleDrawer}
            />
            <PagesList pages={pages} navigation={props.navigation} />
        </DrawerContentScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default CustomDrawer;
