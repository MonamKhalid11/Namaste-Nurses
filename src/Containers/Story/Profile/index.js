//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
import { useTranslation } from 'react-i18next'
import PersonalDetails from './PersonalDetails'
import ProfessionalDetails from './ProfessionalDetails'

// create a component
const Profile = (props) => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <CustomHeader
                headerColor={Colors.secondaryColor}
                screenTitle={'Hi Lovely!'}
                navigation={props.navigation}
            />
            <ScrollView contentContainerStyle={styles.scrollingContainer}>
                <CustomButton
                    bgColor={Colors.secondaryColor}
                    titleColor={Colors.white}
                    title={t('profile.button')}
                    onPress={() => props.navigation.navigate('EditProfile')}
                />
                <PersonalDetails
                    name={'Lovely Chawla'}
                    phone={'88843 12345'}
                    date={'03 january 1991'}
                    status={'Active'}
                    year={'2010'}
                    trainer={'50021'}
                />
                <ProfessionalDetails
                    location={'Punjab'}
                    name={'Punjab Public Hospital'}
                    dateOfJoining={'03 january 2019'}
                    designation={'Nurse'}
                    medical={'Cardiology'}
                    tot={'03 january 2019'}
                    ccp={'Cardiology'}

                />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    scrollingContainer: {
        flexGrow: 1,
        padding: WP('5')
    }
});

//make this component available to the app
export default Profile;
