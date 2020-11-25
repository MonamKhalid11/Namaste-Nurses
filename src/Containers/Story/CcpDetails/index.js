//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CuatomCoursesHeaders from '../../../Components/CoursesHeader'
import { useTranslation } from 'react-i18next'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
import CoursesList from './Components/CoursesList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCCPMaterials } from '../../../Store/actions'
// create a component
const CcpToolsDetails = (props) => {
    const { params } = props.route
    console.log("showing params here", params)
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const user = useSelector(state => state.auth.user)
    const [material, setMaterial] = useState([])
    let filteredDetails = []

    useEffect(() => {
        dispatch(fetchCCPMaterials(user.id, (courses) => {
            console.log("showing response here for material", courses)
            if (courses.length > 0) {
                courses.map((materials) => {
                    if (materials.type_id.match(params.ccp.type_id)) {
                        filteredDetails.push(materials)
                        console.log("showingg", materials)
                    }
                })
            }
            setMaterial(filteredDetails)
        }, (reject) => { }))
    }, [])
    return (
        <View style={styles.container}>
            <CuatomCoursesHeaders
                navigation={props.navigation}
                title={params.ccp && params.ccp.type + ' ' + 'Material'}
                subtitle={t('ccpdetails.subtitle')}
                boldSubtitle={t('ccpdetails.language')}
                click={t('ccpdetails.click')}
                isCourseDetails={true}
                color={Colors.appColor}
            />
            <ScrollView contentContainerStyle={styles.scroller}>
                <CoursesList courses={material} />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroller: {
        flexGrow: 1,
        alignSelf: 'center',
    },
    btnContainer: {
        marginTop: WP('5')
    }
});

//make this component available to the app
export default CcpToolsDetails;
