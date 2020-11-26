//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, } from '../../Theme';
import { Common, Fonts, Gutters, Layout, WP, Images } from '@/Theme'
// create a component
const CuatomCoursesHeaders = (props) => {
    console.log("showing numners", props.patients)
    const toggleDrawer = () => props.navigation.toggleDrawer();;
    const onBackBtnPressed = () => props.navigation.goBack()

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }
    return (
        <View style={[props.isPreviousClass ? styles.previous : styles.container, props.color ? { backgroundColor: props.color } : null]}>
            {props.isCourseDetails ?
                <View style={styles.isCourse}>
                    <TouchableOpacity style={styles.drawerContainer}
                        onPress={onBackBtnPressed}
                    >
                        <Image
                            source={Images.back}
                            style={styles.drawer}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.drawerContainer}
                        onPress={toggleDrawer}
                    >
                        <Image
                            source={Images.menu}
                            style={styles.drawer}
                        />
                    </TouchableOpacity>
                </View>

                :
                <TouchableOpacity style={styles.drawerContainer}
                    onPress={toggleDrawer}
                >
                    <Image
                        source={Images.menu}
                        style={styles.drawer}
                    />
                </TouchableOpacity>
            }
            <View style={props.isPreviousClass ? styles.customHeader : styles.textHeader}>
                <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
                <Text allowFontScaling={false} style={styles.subtitle}>{props.subtitle}
                    <Text allowFontScaling={false} style={styles.boldSubtitle}> {props.boldSubtitle}
                    </Text><Text allowFontScaling={false} style={styles.subtitle}> {props.click} </Text>
                </Text>
            </View>

            {props.isPreviousClass ?
                <View style={styles.coursesDetails}>
                    <View style={styles.sessionsContainer}>
                        <Text allowFontScaling={false} style={styles.sessions} ellipsizeMode={'tail'} numberOfLines={1}>{kFormatter(props.sessions)}</Text>
                        <View>
                            <Text allowFontScaling={false} style={styles.sessionTheory}>Sessions</Text>
                            <Text allowFontScaling={false} style={styles.sessionTheory}>Conducted</Text>
                        </View>
                    </View>
                    <View style={styles.border} />
                    <View style={styles.sessionsContainer2}>
                        <Text allowFontScaling={false} style={styles.pateints} ellipsizeMode={'tail'} numberOfLines={1}> {kFormatter(props.patients)}</Text>
                        <View>
                            <Text allowFontScaling={false} style={styles.sessionTheory}>Patients</Text>
                            <Text allowFontScaling={false} style={styles.sessionTheory}>Impacted</Text>
                        </View>
                    </View>

                </View>
                :
                null
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: WP('55'),
        backgroundColor: Colors.coursesColor,
        padding: WP('5'),
        justifyContent: 'space-between'
    },
    previous: {
        display: 'flex',
        height: WP('65'),
        backgroundColor: Colors.coursesColor,
        padding: WP('5'),
    },
    textHeader: {
        // paddingBottom: WP('5')
    },
    customHeader: {
        borderBottomWidth: 1,
        borderColor: Colors.white,
        paddingBottom: WP('5')
    },
    drawerContainer: {
        alignSelf: 'flex-end',
    },
    drawer: {
        height: WP('15'),
        width: WP('5'),
        resizeMode: 'contain',
    },
    title: {
        color: Colors.white,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('8'),
        marginBottom: WP('2')
    },
    subtitle: {
        color: Colors.white,
        fontSize: WP('4')
    },
    boldSubtitle: {
        color: Colors.white,
        // fontFamily: 'Assistant-Bold',
        fontSize: WP('5')
    },
    isCourse: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    coursesDetails: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: WP('90')
    },
    sessionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: WP('44')
    },
    sessionsContainer2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: WP('44'),
        paddingLeft: WP('2')
    },
    sessions: {
        fontFamily: 'Assistant-Bold',
        color: Colors.white,
        fontSize: WP('10'),
        marginRight: WP('2'),
    },
    pateints: {
        fontFamily: 'Assistant-Bold',
        color: Colors.white,
        fontSize: WP('10'),
        marginRight: WP('2'),
    },
    sessionTheory: {
        fontFamily: 'Assistant-Bold',
        color: Colors.white,
        fontSize: WP('5'),
    },
    border: {
        borderWidth: 1,
        borderColor: Colors.white,
        height: WP('10'),
        width: 1,
        alignSelf: 'center'
    }
});

//make this component available to the app
export default CuatomCoursesHeaders;
