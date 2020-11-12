//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next'
import { Colors, WP } from '../../../../Theme';

// create a component
const PersonalDetails = (props) => {
    const { t } = useTranslation()
    placeholder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUz5EWKDu-QHOR3ym0eWBSQenc69_kODInRA&usqp=CAU'
    return (
        <View style={styles.container}>
            <Text allowFontScaling={false} style={styles.title}>{t('profile.personal')}</Text>
            <View style={styles.nameContainer}>
                <Text allowFontScaling={false} style={styles.name}>{props.name}</Text>
                <View style={styles.profileContainer}>
                    <Image
                        source={{ uri: props.profilePicture ? props.profilePicture : placeholder }}
                    />

                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex'
    },
    title: {
        color: Colors.secondaryColor,
        fontWeight: 'bold',
        fontSize: WP('3.5'),
        marginTop: WP('5'),
        marginBottom: WP('5')
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        color: Colors.black,
        // fontWeight: 'bold',
        fontSize: WP('3.5'),
        marginTop: WP('5'),
    },
    profileContainer: {
        display: 'flex',
        height: WP('20'),
        width: WP('20'),
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Colors.pickerBorder,
        position: 'relative'
    }
});

//make this component available to the app
export default PersonalDetails;
