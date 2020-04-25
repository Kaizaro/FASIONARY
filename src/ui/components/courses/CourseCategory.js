import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scaleHorizontal, scaleVertical} from '../../../helpers/lib/util';
import {APP_STYLES} from '../../../helpers/styleguide/Styles';

export const CourseCategory = ({course, color}) => {
    // render block
    return (
        <View style={{...styles.container, backgroundColor: color}}>
            <Text style={APP_STYLES.CARD_NAME_TEXT}>{course}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: scaleVertical(60),
        justifyContent: 'center',
        paddingHorizontal: scaleHorizontal(30),
    },
});
