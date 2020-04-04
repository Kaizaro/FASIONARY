import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {scaleHorizontal, scaleVertical} from '../../lib/util';
import Tag from './Tag';

const renderItem = ({item, index}) => {
    console.log(item, index);
    return <Tag tag={item.name} viewStyle={styles.tag} />;
};

export const TagRow = props => {
    const {tagList} = props;
    console.log(tagList);
    return (
        <FlatList
            keyExtractor={item => item.name + 1}
            data={tagList}
            renderItem={renderItem}
            contentContainerStyle={styles.row}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
        />
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: scaleVertical(20),
    },
    tag: {
        marginLeft: scaleHorizontal(10),
    },
});
