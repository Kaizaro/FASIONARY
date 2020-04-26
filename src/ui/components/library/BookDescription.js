import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
    getBadgeColor,
    scaleHorizontal,
    scaleVertical,
} from '../../../helpers/lib/util';
import {CourseConditionTag} from '../courses/CourseConditionTag';
import {APP_STYLES} from '../../../helpers/styleguide/Styles';
import {APP_COLORS} from '../../../helpers/styleguide/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {APP_FONTS} from '../../../helpers/styleguide/Fonts';

export const BookDescription = ({book, color, onPress}) => {
    // render block
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            style={{...styles.container, backgroundColor: color}}>
            {/* Data */}
            <View style={styles.data}>
                {/* Description block */}
                <View style={styles.description}>
                    <Text style={APP_STYLES.BOLD_TEXT}>{book.name}</Text>
                    <Text style={APP_STYLES.LIGHT_TEXT}>{book.authors}</Text>
                    <Text style={APP_STYLES.LIGHT_TEXT}>{book.year}</Text>
                </View>
                <View style={styles.tagBlock}>
                    <CourseConditionTag
                        condition={book.status}
                        color={APP_COLORS.BADGE_COLORS.YELLOW}
                    />
                    <View style={styles.rating}>
                        <Icon
                            name={'star'}
                            color={APP_COLORS.BLACK_COLOR}
                            size={scaleHorizontal(13)}
                        />
                        <Text style={APP_STYLES.MAIN_TEXT}>{book.rating}</Text>
                    </View>
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
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    description: {
        width: '70%',
        justifyContent: 'space-between',
    },
    tagBlock: {
        width: '25%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    rating: {
        marginTop: scaleVertical(10),
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    },
});
