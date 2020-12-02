//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SessionInput from '../../Story/MarkAttendance/Components/SessionInput'
import { Colors, Images, WP } from '../../../Theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomHeader from '../../../Components/CustomHeader'
import { useTranslation } from 'react-i18next'
import CustomButton from '../../../Components/CustomButton'
import TimePicker from '../MarkAttendance/Components/TimePicker'
import CustomDateTimePicker from '../MarkAttendance/Components/DatePicker'
import OptionsListing from '../MarkAttendance/Components/OptionsList'
import moment from 'moment'
import { markAttendance, getFullData } from '../../../Store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { navigate } from '../../../Services';
import { showToast, getPicture, isOnline } from '../../../Services';

// create a component
const EditClassDetails = ({ route, navigation }) => {
    const { t } = useTranslation()
    console.log("showing values in routes", route)
    const { params } = route
    const [date, setDate] = useState(null)
    const [time, setTime] = useState(null)
    const [people, setNumberOfPeople] = useState(params.no_of_people)
    const [classType, setClassType] = useState(null)
    const [locationWizard, setLocationWizard] = useState(null)
    const [session, setSession] = useState(null)
    const [notes, setNotes] = useState(null)
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
    const updateCheckedState = (tapped) => {
        classesTypes.map((checked) => {
            checked.isSelected = false
        })
        var newData = classesTypes.map(el => {
            if (el.id == tapped)
                return Object.assign({}, el, { isSelected: !el.isSelected })
            return el
        })
        setClassesTypes(newData)
    }

    useEffect(() => {
        setDate(params.class_date)
        setTime(params.class_time)
        setNumberOfPeople(params.no_of_people)
        setLocationWizard(params.ward)
        setNotes(params.notes)
        setSession(params.session_conducted)
        if (params.class_type) {
            updateCheckedState(parseInt(params.class_type.id))
        }

    }, [params])



    const submitData = () => {
        try {
            var selectedOptionId = classesTypes.find((check) => check.isSelected)
            if (user) {
                setLoading(true)
                let parameter = {
                    user_id: user.id,
                    class_id: params.id,
                    class_type: selectedOptionId.id,
                    class_date: date,
                    class_time: time,
                    no_of_people: people,
                    no_of_family: "0",
                    ward: locationWizard,
                    notes: notes,
                    session_conducted: session,
                    entry_time: moment().format('YYYY-MM-DD HH:MM:SS'),
                    session_id: moment().format('YYYY-MM-DD HH:MM:SS'),
                    token: "j56sugRk029Po5DB",
                    appuser_id: user.id,
                    access_token: ""
                }
                console.log('showing paramete passed', parameter)
                isOnline((connected) => {
                    dispatch(markAttendance(parameter, setLoading, (done) => {
                        if (done) {
                            setLoading(false)
                            dispatch(getFullData(user.id, () => {
                                navigate('PreviousClasses')

                            }, () => { }))
                        }
                    }, true))
                }, (offline) => {
                    setLoading(false)
                    showToast(t('commonApp.internetError'))
                })
            }
        } catch (error) {
            console.log("showing error here ", error)
        }
    }

    return (
        <View style={styles.container}>
            <CustomHeader
                headerColor={Colors.appColor}
                screenTitle={'Edit Class Details'}
                navigation={navigation}
            />
            <KeyboardAwareScrollView contentContainerStyle={styles.scroller}
                showsVerticalScrollIndicator={false}
            >
                <CustomDateTimePicker date={date} onDateChange={setDate} title={t('markScreen.date')} isEditClass={true} />
                <TimePicker time={time} onTimeChange={setTime} title={t('markScreen.time')} placeholder={time} isEditClass={true} />
                <SessionInput title={t('editclass.number')} inputStyles={styles.input} value={people.toString()} onChangeText={setNumberOfPeople} />
                <OptionsListing classesTypes={classesTypes} title={t('editclass.classType')} onPress={(tapped) => { updateCheckedState(tapped.id) }} isEditProfle={false} />
                <SessionInput title={t('editclass.location')} placeholder={''} inputStyles={styles.input} value={locationWizard} onChangeText={setLocationWizard} />
                <SessionInput title={t('editclass.session')} placeholder={''} inputStyles={styles.input} value={session} onChangeText={setSession} />
                <SessionInput title={t('editclass.notes')} placeholder={''} isNotes={true} inputStyles={styles.input} value={notes} onChangeText={setNotes} />
                <CustomButton title={t('previousclasses.marknew')}
                    bgColor={Colors.appColor} titleColor={Colors.white}
                    onPress={submitData}
                    containerStyles={styles.btnContainer}
                    loading={loading}
                />
            </KeyboardAwareScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    scroller: {
        flexGrow: 1,
        padding: WP('5'),
        paddingBottom: 150
    },
    input: {
        borderWidth: 0,
        borderColor: Colors.inputGrey,
        borderBottomWidth: 1,

    },
    btnContainer: {
        marginTop: WP('5')
    }
});

//make this component available to the app
export default EditClassDetails;
