import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {width, height} from '../../../navigation/AppNavigator';
import Button from '../../../components/Button';
import {scaleHorizontal, scaleVertical} from '../../../lib/util';
import {APP_FONTS} from '../../../styleguide/Fonts';
import {APP_COLORS} from '../../../styleguide/Colors';
import _ from 'lodash';

import image from '../../../../assets/images/sample.jpeg';
import DictionarySmallCard from '../../../components/DictionarySmallCard';

export default class Dictionary extends Component {
    state = {
        categories: [
            {
                image: image,
                name: 'Clothes',
            },
            {
                image: image,
                name: 'Accessories',
            },
            {
                image: image,
                name: 'Pattern',
            },
            {
                image: image,
                name: 'Sewing',
            },
            {
                image: image,
                name: 'Any',
            },
            {
                image: image,
                name: 'Any',
            },
            {
                image: image,
                name: 'Any',
            },
            {
                image: image,
                name: 'Any',
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
        const {categories} = this.state;
        const chunkedCategories = _.chunk(categories, 2);
        console.log(chunkedCategories);
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.divideContainer}>
                        <Text style={styles.title}>Visual Dictionary</Text>
                    </View>
                    <View style={styles.divideContainer}>
                        <Text style={styles.text}>
                            Visual Dictionary helps you to define professional
                            tools and termins by photo and images, and provides
                            translations on other languages
                        </Text>
                    </View>
                    <Button text={'Favorites'} style={styles.divideContainer} />
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
    container: {
        flexDirection: 'column',
        paddingVertical: scaleVertical(20),
        paddingHorizontal: scaleHorizontal(20),
        justifyContent: 'flex-start',
    },
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
    title: {
        fontFamily: APP_FONTS.TITLE,
        fontSize: scaleHorizontal(36),
        color: APP_COLORS.PRIMARY_COLOR_ORANGE,
    },
    text: {
        fontFamily: APP_FONTS.TEXT_MAIN,
        fontSize: scaleHorizontal(16),
        color: APP_COLORS.BLACK_COLOR,
    },
});
