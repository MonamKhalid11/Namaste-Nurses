//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { WP } from '../../../../../Theme';
import ClassesItem from '../ClassesItem'
// create a component
const PreviousClassesList = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {props.classes.map((classDetails) => {
                return (
                    <ClassesItem classDetails={classDetails} onPress={(item) => props.onPress(item)} />
                )

            })}
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: WP('5'),
        paddingBottom: 150
    },
});

//make this component available to the app
export default PreviousClassesList;
