import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {APP_COLORS} from '../../../helpers/styleguide/Colors';
import {scaleHorizontal, scaleVertical} from '../../../helpers/lib/util';
import {APP_FONTS} from '../../../helpers/styleguide/Fonts';

export default class StarButton extends Component {
    render() {
        const {onPress} = this.props;
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPress}
                style={styles.container}>
                <Icon
                    name={'star'}
                    color={APP_COLORS.PRIMARY_COLOR_ORANGE}
                    size={40}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scaleHorizontal(10),
        paddingVertical: scaleVertical(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    // text: {
    //     marginLeft: scaleHorizontal(5),
    //     fontFamily: APP_FONTS.TEXT_MAIN,
    //     fontSize: scaleHorizontal(20),
    //     color: 'white',
    // },
});
