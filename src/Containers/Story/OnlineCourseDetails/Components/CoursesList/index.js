//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CourseItem from '../CourseItem'
// create a component
const CoursesList = (props) => {
    return (
        <View style={styles.container}>
            {props.courses.map((course) => {
                return (
                    <CourseItem course={course} />
                )
            })}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default CoursesList;
