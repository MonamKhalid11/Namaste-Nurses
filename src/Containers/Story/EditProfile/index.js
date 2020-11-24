//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
import { useTranslation } from 'react-i18next'
import AvatarContainer from '../../../Components/Avatar'
import SessionInput from '../MarkAttendance/Components/SessionInput'
import CustomDateTimePicker from '../MarkAttendance/Components/DatePicker'
import OptionsListing from '../MarkAttendance/Components/OptionsList'
import MedicalConditionsPicker from './Components/index'
import { pickImages, isOnline, updateUserProfile, phoneNumberValidator, showToast } from '../../../Services'
import { updateUserProfiles, fetchNurseProfile } from '../../../Store/actions'
import { useDispatch, useSelector } from 'react-redux'

// create a component
const EditProfile = (props) => {
    console.log('showing profiles', props.route)
    const { params } = props.route
    const { t } = useTranslation()
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [classesTypes, setClassesTypes] = useState([
        {
            id: 1,
            title: t('markScreen.option1'),
            isSelected: false
        },
        {
            id: 2,
            title: t('markScreen.option2'),
            isSelected: false
        },
        {
            id: 3,
            title: t('markScreen.option3'),
            isSelected: false
        },
        {
            id: 4,
            title: t('markScreen.option4'),
            isSelected: false
        },
        {
            id: 5,
            title: t('markScreen.option5'),
            isSelected: false
        },
        {
            id: 6,
            title: t('markScreen.option6'),
            isSelected: false
        },
        {
            id: 7,
            title: t('markScreen.option7'),
            isSelected: false
        },

    ])
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {
            id: 1,
            label: t('medicalConditons.option1'),
            value: t('medicalConditons.option1'),
            name: t('medicalConditons.option1'),


            isSelected: false
        },
        {
            id: 2,
            label: t('medicalConditons.option2'),
            value: t('medicalConditons.option2'),
            name: t('medicalConditons.option2'),


            isSelected: false
        },
        {
            id: 3,
            label: t('medicalConditons.option3'),
            value: t('medicalConditons.option3'),
            name: t('medicalConditons.option3'),


            isSelected: false
        },
        {
            id: 4,
            label: t('medicalConditons.option4'),
            value: t('medicalConditons.option4'),
            name: t('medicalConditons.option4'),


            isSelected: false
        },
    ]);
    const [fname, setFName] = useState(params.nurse.first_name)
    const [lname, setLName] = useState(params.nurse.last_name)

    const [mobile, setMobile] = useState(params.nurse.mobile_number)
    const [dob, setDob] = useState(params.nurse.dob)
    const [graduating_year, setGraduating_year] = useState(params.graduating_year)
    const [trainer, setTrainer] = useState(params.trainer)
    const [hospital, setHospitalName] = useState(params.hospital.name)
    const [joining, setJoining] = useState(params.hospital_joining_date)
    const [designation, setDesignation] = useState(params.designation)
    const [medicalValue, setMedicalValue] = useState(null)
    const [tot_date, setTot_date] = useState(params.tot_date)
    const [medicalPlaceHolder, setMedicalPlaceHolder] = useState(null)
    const [pickedImage, setPickedImage] = useState(params.nurse.profile_image)
    const [pickedCcp, setPickedCcp] = useState(params.ccp_condition_id)
    const updateCheckedState = (tapped) => {
        classesTypes.map((checked) => {
            checked.isSelected = false
        })
        var newData = classesTypes.map(el => {
            if (el.id == tapped)
                return Object.assign({}, el, { isSelected: !el.isSelected })
            setPickedCcp(el)
            return el
        })
        setClassesTypes(newData)
    }
    const updateMedicalValue = (id) => {
        items.map((el) => {
            if (el.id == id) {
                setMedicalPlaceHolder(el)
            }
        })
    }
    useEffect(() => {
        try {
            updateCheckedState(params.ccp_condition_id)
            if (params.hospital_condition.length > 0) {
                updateMedicalValue(params.hospital_condition[0].hospital_id)
            }
        } catch (error) {

        }
    }, [])

    const ImagePicker = () => {
        pickImages((image) => {
            setPickedImage(image.uri)
        }, (error) => {

        })
    }

    submitProfile = () => {
        try {
            isOnline((connected) => {
                setLoading(true)
                let parameters = {
                    user_id: user.id,
                    image: pickedImage.uri ? 'data:image/jpeg;base64,' + pickedImage.data : "",
                    first_name: fname,
                    last_name: lname,
                    dob: dob,
                    graduating_year: graduating_year,
                    hospital_id: params.hospital.id,
                    hospital_name: hospital,
                    hospital_joining_date: joining,
                    designation: designation,
                    trainer: trainer,
                    hospital_condition_id: medicalPlaceHolder.id,
                    tot_date: tot_date,
                    ccp_condition_id: pickedCcp.id ? pickedCcp.id : pickedCcp,
                    token: "j56sugRk029Po5DB",
                    appuser_id: user.id,
                    access_token: ""
                }
                dispatch(updateUserProfiles(parameters,
                    ((updated) => {
                        setLoading(false)
                        showToast('Profile Updated Successfully!')
                        dispatch(fetchNurseProfile(user.id))

                    }),
                    (() => {
                        setLoading(false)

                    })
                ))
                console.log("showing params", parameters)
            }, (offline) => {
                showToast(t('commonApp.internetError'))
            })

        } catch (error) {

        }
    }
    return (
        <View style={styles.container}>
            <CustomHeader
                headerColor={Colors.secondaryColor}
                screenTitle={'Edit Profile'}
                navigation={props.navigation}
            />
            <ScrollView contentContainerStyle={styles.scrollingContainer}
                showsVerticalScrollIndicator={false}
            >
                <AvatarContainer
                    isEdit={true}
                    onPress={ImagePicker}
                    profilePicture={pickedImage.uri ? pickedImage.uri : pickedImage}
                />
                <Text allowFontScaling={false} style={styles.title}>{t('profile.personal')}</Text>
                < SessionInput title={t('editprofile.name')} placeholder={t('editprofile.locationPlaceHolder')} value={fname} onChangeText={setFName} />
                < SessionInput title={t('editprofile.lname')} placeholder={t('editprofile.locationPlaceHolder')} value={lname} onChangeText={setLName} />
                <SessionInput title={t('editprofile.mobile')} placeholder={t('editprofile.peoplePlaceHolder')} keyboardType={'numeric'} value={mobile} onChangeText={setMobile} />
                <CustomDateTimePicker isDate={true} date={dob} onDateChange={setDob} title={t('editprofile.Date')} />
                <CustomDateTimePicker isDate={true} date={graduating_year} onDateChange={setGraduating_year} title={t('editprofile.year')} />
                < SessionInput title={t('editprofile.trainer')} placeholder={t('Enter trainer id')} value={trainer} onChangeText={setTrainer} />
                <Text allowFontScaling={false} style={styles.title}>{t('profile.professional')}</Text>
                <SessionInput title={t('profile.name')} placeholder={t('profile.sessionPlaceHolder')} value={hospital} onChangeText={setHospitalName} />
                <CustomDateTimePicker isDate={true} date={joining} onDateChange={setJoining} title={t('profile.dateOfJoining')} />
                <SessionInput title={t('profile.designation')} placeholder={t('profile.sessionPlaceHolder')} value={designation} onChangeText={setDesignation} />
                <MedicalConditionsPicker title={t('profile.medical')} items={items} setItems={setItems} value={value} setValue={setValue} placeholder={params.hospital_condition} pickedMedicalValue={(pickedOption) => setMedicalPlaceHolder(pickedOption)} />
                <CustomDateTimePicker isDate={true} date={tot_date} onDateChange={setTot_date} title={t('profile.tot')} />
                <OptionsListing classesTypes={classesTypes} title={t('profile.ccp')} onPress={(tapped) => { updateCheckedState(tapped.id) }} />
                <CustomButton
                    bgColor={Colors.secondaryColor}
                    titleColor={Colors.white}
                    title={t('editprofile.submit')}
                    loading={loading}
                    onPress={submitProfile}

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
    },
    title: {
        color: Colors.secondaryColor,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('3.5'),
        marginTop: WP('5'),
        marginBottom: WP('5')
    },
});

//make this component available to the app
export default EditProfile;
