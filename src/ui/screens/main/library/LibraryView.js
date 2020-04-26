import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {APP_STYLES} from '../../../../helpers/styleguide/Styles';
import Title from '../../../components/common/Title';
import Description from '../../../components/common/Description';
import {scaleVertical} from '../../../../helpers/lib/util';
import Pdf from 'react-native-pdf';
import {BookDescriptionView} from '../../../components/library/BookDescriptionInView';
import {LIBRARY} from '../../../../constants/data/library/Library';
import {APP_COLORS} from '../../../../helpers/styleguide/Colors';

export const LibraryView = () => {
    const source = {
        uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
        cache: true,
    };

    return (
        <View style={{flex: 1}}>
            <View
                style={{
                    paddingTop: scaleVertical(20),
                    backgroundColor: APP_COLORS.BADGE_COLORS.BLUE,
                }}>
                <BookDescriptionView book={LIBRARY[0]} />
            </View>
            <View style={APP_STYLES.CONTAINER}>
                {/*<Title title={'Profile'} />*/}
                {/*<Description*/}
                {/*    text={'Profile not available right now'}*/}
                {/*    viewStyle={styles.divideContainer}*/}
                {/*/>*/}
                <Pdf source={source} style={styles.pdf} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    divideContainer: {
        marginTop: scaleVertical(20),
    },
    pdf: {
        // flex: 1,
        width: '100%',
        height: '100%',
    },
});
