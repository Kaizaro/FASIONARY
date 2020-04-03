import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {APP_STYLES} from '../../styleguide/Styles';

export default class Divide extends PureComponent {
    render() {
        const {viewStyle} = this.props;
        return (
            <View
                style={{
                    ...APP_STYLES.DIVIDE,
                    ...viewStyle,
                }}
            />
        );
    }
}
