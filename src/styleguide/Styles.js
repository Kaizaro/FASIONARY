import {scaleHorizontal, scaleVertical} from '../lib/util';
import {APP_FONTS} from './Fonts';
import {APP_COLORS} from './Colors';
import {StyleSheet} from 'react-native';

export const APP_STYLES = StyleSheet.create({
    CONTAINER: {
        flexDirection: 'column',
        paddingVertical: scaleVertical(20),
        paddingHorizontal: scaleHorizontal(20),
        justifyContent: 'flex-start',
    },
    TITLE_TEXT: {
        fontFamily: APP_FONTS.TITLE,
        fontSize: scaleHorizontal(36),
        color: APP_COLORS.PRIMARY_COLOR_ORANGE,
    },
    MAIN_TEXT: {
        fontFamily: APP_FONTS.TEXT_MAIN,
        fontSize: scaleHorizontal(16),
        color: APP_COLORS.BLACK_COLOR,
    },
});
