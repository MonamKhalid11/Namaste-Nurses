//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import { useTranslation } from 'react-i18next'
import { Colors, WP } from '../../../Theme';
import Picker from './Components/Picker'
import CustomDateTimePicker from './Components/DatePicker'
import SessionInput from './Components/SessionInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../../Components/CustomButton'
import OptionsListing from './Components/OptionsList'
import CustomModal from '../../../Components/CustomModal'
import TimePicker from './Components/TimePicker'
import { showToast, getPicture, isOnline } from '../../../Services';
import { useDispatch, useSelector } from 'react-redux'
import { markAttendance } from '../../../Store/actions'
import moment from 'moment'
import { cos } from 'react-native-reanimated';
// create a component
const MarkAttendance = (props) => {
    console.log("showing props here for marked attendance", props)
    const { t } = useTranslation()
    const [date, SetDate] = useState(new Date())
    const [time, SetTime] = useState(moment().format('HH:MM a'))
    const [people, SetPeople] = useState(null)
    const [location, SetLocation] = useState(null)
    const [session, SetSession] = useState(null)
    const [notes, SetNotes] = useState(null)
    const [openModal, setModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const user = useSelector(state => state.auth.user)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

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
    useEffect(() => {
    }, [classesTypes])

    const updateCheckedState = (tapped) => {
        classesTypes.map((checked) => {
            checked.isSelected = false
        })
        var newData = classesTypes.map(el => {
            if (el.id == tapped.id)
                return Object.assign({}, el, { isSelected: !el.isSelected })
            return el
        })
        setClassesTypes(newData)
    }
    const unMark = () => {
        classesTypes.map((checked) => {
            checked.isSelected = false
        })
    }
    const renderImages = (isCamera) => {
        if (isCamera) {
            getPicture(true, (image) => {
                setSelectedImage(image.uri)
                toggleModal()
            }, (reject) => {

            })
        }
        else {
            getPicture(false, (image) => {
                setSelectedImage(image.uri)
                toggleModal()
            }, (reject) => {

            })
        }
    }
    const submitData = () => {
        try {
            var selectedOptionId = classesTypes.find((check) => check.isSelected)
            console.log("showing is selected", selectedOptionId)
            if (!date) {
                showToast('Please enter date!')
                return
            }
            else if (!selectedImage) {
                showToast('Please select image!')
            }
            else if (!time) {
                showToast('Please enter time!')
                return
            }
            else if (!people) {
                showToast('Please enter number of people!')
                return
            }
            else if (!selectedOptionId) {
                showToast('Please select class type!')
                return
            }
            else if (!location) {
                showToast('Please enter location!')
                return
            }
            else {
                setLoading(true)
                if (user) {
                    let params = {
                        user_id: user.id,
                        class_id: "0",
                        class_type: selectedOptionId.id,
                        image: 'data:image/jpeg;base64,' + selectedImage.data,
                        class_date: moment(date).format('YYYY-MM-DD'),
                        class_time: time.slice(0, 5),
                        no_of_people: people,
                        no_of_family: "0",
                        ward: location,
                        notes: notes,
                        session_conducted: session,
                        entry_time: moment().format('YYYY-MM-DD HH:MM:SS'),
                        session_id: moment().format('YYYY-MM-DD HH:MM:SS'),
                        token: "j56sugRk029Po5DB",
                        appuser_id: user.id,
                        access_token: ""
                    }
                    console.log("showing aprams here", params)
                    isOnline((connected) => {
                        dispatch(markAttendance(params, (response) => {
                            if (response) {

                                SetPeople(null)
                                SetLocation(null)
                                SetSession(null)
                                SetNotes(null)
                                setSelectedImage(null)
                                unMark()
                                setLoading(false)

                            }
                            else {
                                showToast('Try again')
                                setLoading(false)

                            }

                        }))

                    }, (offline) => {
                        setLoading(false)
                        showToast(t('commonApp.internetError'))
                    })
                }
            }
        } catch (error) {

        }
    }

    const toggleModal = () => setModal(!openModal)
    return (
        <View style={styles.container}>
            <CustomHeader
                screenTitle={t('markScreen.title')}
                navigation={props.navigation}
            />
            <KeyboardAwareScrollView >
                <View style={styles.domainContainer}>
                    <Picker
                        onPress={toggleModal}
                        selectedImage={selectedImage}
                    />
                    <CustomDateTimePicker date={date} onDateChange={SetDate} title={t('markScreen.date')} />
                    <TimePicker time={time} onTimeChange={SetTime} title={t('markScreen.time')} placeholder={time} />
                    <SessionInput title={t('markScreen.people')} placeholder={t('markScreen.peoplePlaceHolder')} keyboardType={'numeric'} value={people} onChangeText={SetPeople} />
                    <OptionsListing classesTypes={classesTypes} title={t('markScreen.type')} subTitle={t('markScreen.select')} onPress={(tapped) => { updateCheckedState(tapped) }} />
                    < SessionInput title={t('markScreen.location')} placeholder={t('markScreen.locationPlaceHolder')} value={location} onChangeText={SetLocation} />
                    <SessionInput title={t('markScreen.session')} placeholder={t('markScreen.sessionPlaceHolder')} value={session} onChangeText={SetSession} />
                    <SessionInput title={t('markScreen.notes')} placeholder={t('markScreen.notesPlaceHolder')} isNotes={true} value={notes} onChangeText={SetNotes} />
                    <CustomButton title={t('markScreen.submit')} bgColor={Colors.appColor} titleColor={Colors.white} onPress={submitData} loading={loading} />
                </View>
            </KeyboardAwareScrollView>
            <CustomModal
                isVisible={openModal}
                onClosePress={toggleModal}
                onBackdropPress={toggleModal}
                onCameraPress={() => renderImages(true)}
                onLibraryPress={() => renderImages(false)}
            />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    domainContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        padding: WP('5')
    },
});

//make this component available to the app
export default MarkAttendance;
