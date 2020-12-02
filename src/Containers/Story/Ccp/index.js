//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import CuatomCoursesHeaders from '../../../Components/CoursesHeader'
import { useTranslation } from 'react-i18next'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
// create a component
const CcpTools = (props) => {
    const { t } = useTranslation()
    const navigateCourse = (options) => {
        props.navigation.navigate('PreferredLanguage', { ccp: options })
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={Colors.appColor}
            />
            <CuatomCoursesHeaders
                navigation={props.navigation}
                title={t('ccp.title')}
                subtitle={t('ccp.subtitle')}
                boldSubtitle={t('ccp.language')}
                click={t('ccp.click')}
                color={Colors.appColor}

            />
            <ScrollView contentContainerStyle={styles.scroller}>
                <CustomButton
                    bgColor={Colors.appColor}
                    titleColor={Colors.white}
                    title={t('ccp.button1')}
                    containerStyles={styles.btnContainer}
                    onPress={() => navigateCourse({
                        type: "ANC",
                        type_id: "1",
                    })}
                />
                <CustomButton
                    bgColor={Colors.appColor}
                    titleColor={Colors.white}
                    title={t('ccp.button2')}
                    containerStyles={styles.btnContainer}
                    onPress={() => navigateCourse({
                        type: "PNC",
                        type_id: "2"
                    })}

                />
                <CustomButton
                    bgColor={Colors.appColor}
                    titleColor={Colors.white}
                    title={t('ccp.button3')}
                    containerStyles={styles.btnContainer}
                    onPress={() => navigateCourse({
                        type: "SNCU",
                        type_id: "3",
                    })} />
                <CustomButton
                    bgColor={Colors.appColor}
                    titleColor={Colors.white}
                    title={t('ccp.button4')}
                    containerStyles={styles.btnContainer}
                // onPress={navigateCourse}
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
    scroller: {
        flexGrow: 1,
        alignSelf: 'center',
    },
    btnContainer: {
        marginTop: WP('5')
    }
});

//make this component available to the app
export default CcpTools;
