import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {width, height} from '../../Init';
import {scaleHorizontal, scaleVertical} from '../../../../helpers/lib/util';
import _ from 'lodash';

import DictionarySmallCard from '../../../components/dictionary/DictionarySmallCard';
import {APP_STYLES} from '../../../../helpers/styleguide/Styles';
import Divide from '../../../components/common/Divide';
import {TagRow} from '../../../components/common/TagRow';
import {SUBCATEGORIES} from '../../../../constants/data/SubCategories';

export default class SubCategories extends Component {
    onCardPress = cardData => {
        let oldTagList = [];
        this.props.route.params.tagList.map(tag => {
            console.log(tag);
            oldTagList.push(tag);
        });
        oldTagList.push(cardData);
        this.props.navigation.navigate('DynamicGrid', {
            tagList: oldTagList,
        });
    };

    renderItem = ({item, index}) => {
        console.log(item, index);
        return (
            <View style={styles.rowContainer}>
                {item.map((cardData, cardIndex) => {
                    console.log(cardIndex, cardData);
                    return (
                        <DictionarySmallCard
                            image={cardData.image}
                            text={cardData.name}
                            onPress={() => this.onCardPress(cardData)}
                        />
                    );
                })}
            </View>
        );
    };

    render() {
        console.log(width, height);
        const chunkedSubCategories = _.chunk(SUBCATEGORIES, 2);
        console.log(chunkedSubCategories);
        console.log(this.props.navigation);
        console.log(this.props.route);
        const tagList = this.props.route.params.tagList;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={APP_STYLES.CONTAINER}>
                    <Divide />
                    <TagRow tagList={tagList} />
                    {/*<Tag tag={tag} viewStyle={styles.divideContainer} />*/}
                    <View style={styles.flatlistContainer}>
                        <FlatList
                            keyExtractor={item => item[0].id + item[1].name}
                            data={chunkedSubCategories}
                            renderItem={this.renderItem}
                            contentContainerStyle={
                                styles.flatlistContentContainer
                            }
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    divideContainer: {
        marginTop: scaleVertical(20),
    },
    flatlistContainer: {
        marginTop: scaleVertical(20),
        width: '100%',
        height: scaleVertical(330),
    },
    flatlistContentContainer: {
        width: '100%',
        paddingVertical: scaleVertical(20),
    },
    rowContainer: {
        marginBottom: scaleVertical(20),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
