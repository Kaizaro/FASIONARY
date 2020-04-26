import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {scaleVertical} from '../../../../helpers/lib/util';
import Title from '../../../components/common/Title';
import Description from '../../../components/common/Description';
import {APP_STYLES} from '../../../../helpers/styleguide/Styles';

export default class Library extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={APP_STYLES.CONTAINER}>
                    <Title title={'Library'} />
                    <Description
                        text={'Library not available right now'}
                        viewStyle={styles.divideContainer}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    divideContainer: {
        marginTop: scaleVertical(20),
    },
});
