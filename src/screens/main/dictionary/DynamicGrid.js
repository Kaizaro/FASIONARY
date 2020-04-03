import React from 'react';
import Divide from '../../../components/common/Divide';
import Tag from '../../../components/common/Tag';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {DefaultContainer} from '../../../components/DefaultContainer';
import {scaleVertical} from '../../../lib/util';
import {TagRow} from '../../../components/common/TagRow';

const DynamicGrid = props => {
    console.log(props.route);
    const tagList = props.route.params.tagList;
    return (
        <DefaultContainer>
            <Divide />
            <TagRow tagList={tagList} />
            {/*<Tag tag={'some'} viewStyle={styles.divideContainer} />*/}
            {/*<FlatList data={} renderItem={} />*/}
        </DefaultContainer>
    );
};

// const styles = StyleSheet.create({
//     divideContainer: {
//         marginTop: scaleVertical(20),
//     },
// });

export default DynamicGrid;
