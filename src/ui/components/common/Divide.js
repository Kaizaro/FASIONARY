import React, {PureComponent} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {APP_STYLES} from '../../../helpers/styleguide/Styles';
import {routeBack} from '../../../helpers/navigation/NavigationFuncs';
import BackIcon from '../../../../assets/icons/Back.png';
import {scaleHorizontal} from '../../../helpers/lib/util';

export default class Divide extends PureComponent {
    render() {
        const {viewStyle} = this.props;
        return (
            <TouchableOpacity
                style={{
                    ...APP_STYLES.DIVIDE,
                    ...viewStyle,
                }}
                onPress={routeBack}>
                <Image
                    source={BackIcon}
                    resizeMode={'contain'}
                    style={{
                        width: scaleHorizontal(20),
                        height: scaleHorizontal(20),
                    }}
                />
            </TouchableOpacity>
        );
    }
}
