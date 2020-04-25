import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scaleHorizontal, scaleVertical} from '../../../helpers/lib/util';

export const CourseConditionTag = ({condition, color}) => (
    <View style={{...styles.container, backgroundColor: color}}>
        <Text>{condition}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: scaleVertical(20),
        paddingHorizontal: scaleHorizontal(5),
        marginBottom: scaleVertical(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleVertical(5),
    },
});
