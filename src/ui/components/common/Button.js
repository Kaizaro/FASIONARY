import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {APP_COLORS} from '../../../helpers/styleguide/Colors';
import {scaleHorizontal, scaleVertical} from '../../../helpers/lib/util';
import {APP_FONTS} from '../../../helpers/styleguide/Fonts';

export default class Button extends Component {
    render() {
        const {icon, text, style, textStyle, onPress} = this.props;
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPress}
                style={{
                    ...styles.container,
                    ...style,
                }}>
                {icon && (
                    <Icon
                        name={'star'}
                        color={APP_COLORS.BADGE_COLORS.YELLOW}
                        size={20}
                    />
                )}
                <Text
                    style={{
                        ...styles.text,
                        ...textStyle,
                    }}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: scaleVertical(50),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleVertical(10),
        backgroundColor: APP_COLORS.BADGE_COLORS.SPACE_BLUE,
    },
    text: {
        marginLeft: scaleHorizontal(5),
        fontFamily: APP_FONTS.TEXT_MAIN,
        fontSize: scaleHorizontal(20),
        color: 'white',
    },
});
