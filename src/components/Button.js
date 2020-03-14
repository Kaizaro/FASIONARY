import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {BADGE_COLORS} from '../styleguide/Colors';
import {SOFIA_BOLD, SOFIA_PRO_EXTRA_LIGHT} from '../styleguide/Fonts';
import {scaleHorizontal, scaleVertical} from '../lib/util';

export default class Button extends Component {
    render() {
        const {icon, text, style, textStyle} = this.props;
        return (
            <TouchableOpacity
                style={{
                    ...styles.container,
                    ...style,
                }}>
                <Icon name={'star'} color={BADGE_COLORS.YELLOW} size={20} />
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
        height: scaleVertical(60),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleVertical(10),
        backgroundColor: BADGE_COLORS.SPACE_BLUE,
    },
    text: {
        marginLeft: scaleHorizontal(5),
        // fontFamily: SOFIA_PRO_EXTRA_LIGHT,
        fontSize: scaleHorizontal(20),
        color: 'white',
    },
});
