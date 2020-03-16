import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {scaleVertical} from '../../../lib/util';
import Title from '../../../components/common/Title';
import Description from '../../../components/common/Description';
import {APP_STYLES} from '../../../styleguide/Styles';

export default class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={APP_STYLES.CONTAINER}>
                    <Title title={'Profile'} />
                    <Description
                        text={'Profile not available right now'}
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
