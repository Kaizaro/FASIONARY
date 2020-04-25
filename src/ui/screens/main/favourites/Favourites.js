import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {scaleVertical} from '../../../../helpers/lib/util';
import {APP_STYLES} from '../../../../helpers/styleguide/Styles';
import Title from '../../../components/common/Title';
import Description from '../../../components/common/Description';

export const Favourites = () => {
    // render block
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={APP_STYLES.CONTAINER}>
                <Title title={'Favourites'} />
                <Description
                    text={'Favourites not available right now'}
                    viewStyle={styles.divideContainer}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    divideContainer: {
        marginTop: scaleVertical(20),
    },
});
