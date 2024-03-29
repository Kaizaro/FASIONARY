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
    DIVIDE: {
        // paddingHorizontal: scaleHorizontal(12),
        width: scaleHorizontal(40),
        // backgroundColor: APP_COLORS.BADGE_COLORS.SPACE_BLUE,
        // borderRadius: scaleVertical(2),
    },
    TAG: {
        // width: scaleHorizontal(72),
        height: scaleVertical(30),
        // paddingVertical: scaleVertical(2),
        paddingHorizontal: scaleHorizontal(10),
        borderRadius: scaleVertical(8),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: APP_COLORS.BADGE_COLORS.PINK_PURPLE,
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
    CARD_NAME_TEXT: {
        fontFamily: APP_FONTS.TITLE,
        fontSize: scaleHorizontal(24),
        color: APP_COLORS.BLACK_COLOR,
    },
    COURSE_NAME_TEXT: {
        fontFamily: APP_FONTS.TITLE,
        fontSize: scaleHorizontal(24),
        color: APP_COLORS.BACKGROUND_COLOR,
    },
});
