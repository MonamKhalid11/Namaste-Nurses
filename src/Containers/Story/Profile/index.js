//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
import { useTranslation } from 'react-i18next'
import PersonalDetails from './PersonalDetails'
import ProfessionalDetails from './ProfessionalDetails'
import { useDispatch, useSelector } from 'react-redux'
import FocusAwareStatusBar from '../../../Components/FoucsAwareStatusBar'
// create a component
const Profile = (props) => {
    const { t } = useTranslation()
    const user = useSelector(state => state.auth.user)
    const nurserProfile = useSelector(state => state.story.nurseProfile)
    console.log('showing nurse profile', nurserProfile)
    const [classesTypes, setClassesTypes] = useState([
        {
            id: 1,
            title: t('markScreen.option1'),
            isSelected: false
        },
        {
            id: 3,
            title: t('markScreen.option2'),
            isSelected: false
        },
        {
            id: 5,
            title: t('markScreen.option3'),
            isSelected: false
        },
        {
            id: 7,
            title: t('markScreen.option4'),
            isSelected: false
        },
        {
            id: 2,
            title: t('markScreen.option5'),
            isSelected: false
        },
        {
            id: 4,
            title: t('markScreen.option6'),
            isSelected: false
        },
        {
            id: 6,
            title: t('markScreen.option7'),
            isSelected: false
        },

    ])

    const findById = (ccpId) => {
        return classesTypes.find((ccp) => ccp.id == ccpId)
    }

    useEffect(() => {
    }, [nurserProfile])
    return (
        <View style={styles.container}>
            <FocusAwareStatusBar
                backgroundColor={Colors.secondaryColor}
            />
            <CustomHeader
                headerColor={Colors.secondaryColor}
                screenTitle={nurserProfile.nurse.first_name}
                navigation={props.navigation}
                isProfile={true}
            />
            <ScrollView contentContainerStyle={styles.scrollingContainer}>
                <CustomButton
                    bgColor={Colors.secondaryColor}
                    titleColor={Colors.white}
                    title={t('profile.button')}
                    onPress={() => props.navigation.navigate('EditProfile', nurserProfile)}
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
                    medical={nurserProfile.hospital_condition.length > 0 ? nurserProfile.hospital_condition : []}
                    tot={nurserProfile.tot_date.match('NA') ? 'Date of TOT Attended not found' : nurserProfile.tot_date}
                    ccp={nurserProfile.ccp_condition_id ? findById(nurserProfile.ccp_condition_id) : null}

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
