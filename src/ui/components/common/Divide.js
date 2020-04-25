import React, {PureComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import {APP_STYLES} from '../../../helpers/styleguide/Styles';
import {routeBack} from '../../../helpers/navigation/NavigationFuncs';

export default class Divide extends PureComponent {
    render() {
        const {viewStyle} = this.props;
        return (
            <TouchableOpacity
                style={{
                    ...APP_STYLES.DIVIDE,
                    ...viewStyle,
                }}
                onPress={routeBack}
            />
        );
    }
}
