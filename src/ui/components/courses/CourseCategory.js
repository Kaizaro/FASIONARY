import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scaleHorizontal, scaleVertical} from '../../../helpers/lib/util';
import {APP_STYLES} from '../../../helpers/styleguide/Styles';

export const CourseCategory = ({course, color, onPress}) => {
    // render block
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            style={{...styles.container, backgroundColor: color}}>
            <Text style={APP_STYLES.COURSE_NAME_TEXT}>{course}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: scaleVertical(60),
        justifyContent: 'center',
        paddingHorizontal: scaleHorizontal(30),
        borderRadius: scaleVertical(20),
    },
});
