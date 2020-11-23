//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
import { useTranslation } from 'react-i18next'
import PersonalDetails from './PersonalDetails'
import ProfessionalDetails from './ProfessionalDetails'
import { useDispatch, useSelector } from 'react-redux'

// create a component
const Profile = (props) => {
    const { t } = useTranslation()
    const user = useSelector(state => state.auth.user)
    const nurserProfile = useSelector(state => state.story.nurseProfile)
    console.log('showing nurse profile', nurserProfile)


    return (
        <View style={styles.container}>
            <CustomHeader
                headerColor={Colors.secondaryColor}
                screenTitle={user.first_name + ' ' + user.last_name}
                navigation={props.navigation}
            />
            <ScrollView contentContainerStyle={styles.scrollingContainer}>
                <CustomButton
                    bgColor={Colors.secondaryColor}
                    titleColor={Colors.white}
                    title={t('profile.button')}
                    onPress={() => props.navigation.navigate('EditProfile')}
                />
                {nurserProfile ?
                    <PersonalDetails
                        name={nurserProfile.nurse.first_name + ' ' + nurserProfile.nurse.last_name}
                        phone={nurserProfile.nurse.mobile_number.match('NA') ? 'Mobile number not found' : nurserProfile.nurse.mobile_number}
                        date={nurserProfile.nurse.dob.match('NA') ? 'Date of birth not found' : nurserProfile.nurse.dob}
                        status={nurserProfile.status.match("1") ? 'Active' : 'Non Active'}
                        year={nurserProfile.graduating_year.match('NA') ? 'Graduating year not found' : nurserProfile.graduating_year}
                        trainer={nurserProfile.trainer.match('NA') ? "trainer id not found" : nurserProfile.trainer}
                        profilePicture={nurserProfile.nurse.profile_image}
                    />
                    :
                    <Text>No Data found!</Text>
                }
                <ProfessionalDetails
                    location={nurserProfile.location.state_name}
                    name={nurserProfile.hospital.name.match('NA') ? 'Hospital name not found' : nurserProfile.hospital.name}
                    dateOfJoining={nurserProfile.hospital_joining_date.match('NA') ? "Joining date not found" : nurserProfile.hospital_joining_date}
                    designation={nurserProfile.designation.match('NA') ? 'Designation not found' : nurserProfile.designation}
                    medical={nurserProfile.hospital_condition.length > 0 ? nurserProfile.hospital_condition : 'Medical Condition not found'}
                    tot={nurserProfile.tot_date.match('NA') ? 'Date of TOT Attended not found' : nurserProfile.tot_date}
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
