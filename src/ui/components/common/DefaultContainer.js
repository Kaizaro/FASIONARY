import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {APP_STYLES} from '../../../helpers/styleguide/Styles';

export const DefaultContainer = props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{...APP_STYLES.CONTAINER, ...props.style}}>
                {props.children}
            </View>
        </SafeAreaView>
    );
};
