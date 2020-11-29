//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SessionInput from '../../Story/MarkAttendance/Components/SessionInput'
import { Colors, Images, WP } from '../../../Theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomHeader from '../../../Components/CustomHeader'
import { useTranslation } from 'react-i18next'
import CustomButton from '../../../Components/CustomButton'
// create a component
const EditClassDetails = ({ route, navigation }) => {
    const { t } = useTranslation()
    console.log("showing values in routes", route)
    const { params } = route
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
                <SessionInput title={t('editclass.date')} placeholder={params.dated} inputStyles={styles.input} />
                <SessionInput title={t('editclass.time')} placeholder={params.time} inputStyles={styles.input} />
                <SessionInput title={t('editclass.number')} placeholder={'5'} inputStyles={styles.input} />
                <SessionInput title={t('editclass.classType')} placeholder={''} inputStyles={styles.input} />
                <SessionInput title={t('editclass.location')} placeholder={''} inputStyles={styles.input} />
                <SessionInput title={t('editclass.session')} placeholder={''} inputStyles={styles.input} />
                <SessionInput title={t('editclass.notes')} placeholder={''} isNotes={true} inputStyles={styles.input} />
                <CustomButton title={t('previousclasses.marknew')}
                    bgColor={Colors.appColor} titleColor={Colors.white}
                    onPress={() => navigation.navigate('MarkAttendance')}
                    containerStyles={styles.btnContainer}
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
