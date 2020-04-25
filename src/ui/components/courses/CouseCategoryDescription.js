import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
    getBadgeColor,
    scaleHorizontal,
    scaleVertical,
} from '../../../helpers/lib/util';
import {CourseConditionTag} from './CourseConditionTag';
import {APP_STYLES} from '../../../helpers/styleguide/Styles';

export const CourseCategoryDescription = ({course, color, onPress}) => {
    // render block
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            style={{...styles.container, backgroundColor: color}}>
            {/* Title */}
            <View>
                <Text style={APP_STYLES.COURSE_NAME_TEXT}>{course.name}</Text>
            </View>

            {/* Data */}
            <View style={styles.data}>
                {/* Description block */}
                <View style={styles.description}>
                    <Text style={APP_STYLES.MAIN_TEXT}>{course.description}</Text>
                </View>
                <View style={styles.tagBlock}>
                    {course.conditions.map((item, index) => {
                        console.log(item, index);
                        return (
                            <CourseConditionTag
                                condition={item.details}
                                color={getBadgeColor(index)}
                            />
                        );
                    })}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        paddingVertical: scaleVertical(20),
        paddingHorizontal: scaleHorizontal(30),
        borderRadius: scaleVertical(20),
    },
    data: {
        marginTop: scaleVertical(10),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    description: {
        width: '70%',
    },
    tagBlock: {
        width: '25%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});
