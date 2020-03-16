import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {width, height} from '../../../navigation/AppNavigator';
import Button from '../../../components/common/Button';
import {scaleHorizontal, scaleVertical} from '../../../lib/util';
import {APP_FONTS} from '../../../styleguide/Fonts';
import {APP_COLORS} from '../../../styleguide/Colors';
import _ from 'lodash';

import image from '../../../../assets/images/sample.jpeg';
import DictionarySmallCard from '../../../components/dictionary/DictionarySmallCard';
import Title from '../../../components/common/Title';
import Description from '../../../components/common/Description';
import {APP_STYLES} from '../../../styleguide/Styles';
import Tag from '../../../components/common/Tag';

export default class SubCategories extends Component {
    state = {
        subCategories: [
            {
                image: image,
                name: 'Bottom',
            },
            {
                image: image,
                name: 'Skirt',
            },
            {
                image: image,
                name: 'Dress',
            },
            {
                image: image,
                name: 'Outwear',
            },
        ],
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
                        />
                    );
                })}
            </View>
        );
    };

    render() {
        console.log(width, height);
        const {subCategories} = this.state;
        const chunkedCategories = _.chunk(subCategories, 2);
        console.log(chunkedCategories);
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={APP_STYLES.CONTAINER}>
                    <Tag tag={this.props.navigation.getParam('tag')} />
                    <View style={styles.flatlistContainer}>
                        <FlatList
                            data={chunkedCategories}
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
