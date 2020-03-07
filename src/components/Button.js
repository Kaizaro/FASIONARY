import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {BADGE_COLORS} from '../styleguide/Colors';

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
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: BADGE_COLORS.SPACE_BLUE,
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
});
