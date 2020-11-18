//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomLayout, CustomButton } from '@/Components'
import { useTranslation } from 'react-i18next'
import Headings from './Components/Heading'
import { Colors } from '../../../Theme';
// create a component
const CommingSoon = (props) => {
    const { t } = useTranslation()

    const toggleDrawer = () => props.navigation.toggleDrawer();;

    return (
        <CustomLayout
            drawerOnPress={toggleDrawer}
            commingSoon={true}
            logoStyles={styles.logoContainer}
            contentContainer={styles.contentContainer}
            showBackbtn={true}
            navigation={props.navigation}
        >
            <Headings />
            <CustomButton
                onPress={() => props.navigation.navigate('CcpTools')}
                title={t('commingsoon.button1')}
                titleColor={Colors.white}
                bgColor={Colors.appColor}
            />
            <CustomButton
                title={t('commingsoon.button2')}
                titleColor={Colors.white}
                bgColor={Colors.appColor}

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
    logoContainer: {
        backgroundColor: Colors.appColor
    },
    contentContainer: {
        backgroundColor: Colors.white
    }
});
//make this component available to the app
export default CommingSoon;
