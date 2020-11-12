//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
import { useTranslation } from 'react-i18next'
import PersonalDetails from './PersonalDetails'

// create a component
const Profile = (props) => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <CustomHeader
                headerColor={Colors.secondaryColor}
                screenTitle={'Hi Lovely!'}
            />
            <ScrollView contentContainerStyle={styles.scrollingContainer}>
                <CustomButton
                    bgColor={Colors.secondaryColor}
                    titleColor={Colors.white}
                    title={t('profile.button')}
                />
                <PersonalDetails />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollingContainer: {
        flexGrow: 1,
        padding: WP('5')
    }
});

//make this component available to the app
export default Profile;
