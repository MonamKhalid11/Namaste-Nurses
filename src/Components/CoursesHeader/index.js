//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, } from '../../Theme';
import { Common, Fonts, Gutters, Layout, WP, Images } from '@/Theme'
// create a component
const CuatomCoursesHeaders = (props) => {
    const toggleDrawer = () => props.navigation.toggleDrawer();;
    const onBackBtnPressed = () => props.navigation.goBack()


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
                        <Text allowFontScaling={false} style={styles.sessions} ellipsizeMode={'tail'} numberOfLines={1}>{props.sessions}</Text>
                        <View>
                            <Text allowFontScaling={false} style={styles.sessionTheory}>Sessions</Text>
                            <Text allowFontScaling={false} style={styles.sessionTheory}>Conducted</Text>
                        </View>
                    </View>
                    <View style={styles.border} />
                    <View style={styles.sessionsContainer}>
                        <Text allowFontScaling={false} style={styles.sessions} ellipsizeMode={'tail'} numberOfLines={1}> {props.patients}</Text>
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
        paddingBottom: WP('5')
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
        fontWeight: 'bold',
        fontSize: WP('6'),
        marginBottom: WP('2')
    },
    subtitle: {
        color: Colors.white,
        fontSize: WP('3.5')
    },
    boldSubtitle: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: WP('3.5')
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
        marginTop: WP('4'),
        width: WP('80')
    },
    sessionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    sessions: {
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: WP('10'),
        marginRight: WP('1')
    },
    sessionTheory: {
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: WP('4'),
    },
    border: {
        borderWidth: 1,
        borderColor: Colors.white,
        height: WP('10'),
        width: 1
    }
});

//make this component available to the app
export default CuatomCoursesHeaders;
