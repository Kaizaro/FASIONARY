import React, {Component, Fragment} from 'react';
import {Alert, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {scaleVertical} from '../../../../helpers/lib/util';
import Title from '../../../components/common/Title';
import Description from '../../../components/common/Description';
import {APP_STYLES} from '../../../../helpers/styleguide/Styles';
import DictionarySmallCard from '../../../components/dictionary/DictionarySmallCard';
import _ from 'lodash';
import {CATEGORIES} from '../../../../constants/data/dictionary/Categories';

export default class Courses extends Component {
    onPressCard = cardData => {
        console.log(cardData);
        if (cardData.name === 'Clothes') {
            this.props.navigation.navigate('SubCategories', {
                tagList: [cardData],
            });
        } else {
            Alert.alert(
                `${cardData.name} is unavailable`,
                'Unfortunately, right now this category is not available.',
            );
        }
    };

    renderItem = ({item, index}) => {
        console.log(item, index);
        return (
            <Fragment>
                {index === 0 && (
                    <Description
                        text={description}
                        viewStyle={{marginBottom: scaleVertical(20)}}
                    />
                )}
                <View style={styles.rowContainer}>
                    {item.map((cardData, cardIndex) => {
                        console.log(cardIndex, cardData);
                        return (
                            <DictionarySmallCard
                                image={cardData.image}
                                text={cardData.name}
                                onPress={() => this.onPressCard(cardData)}
                            />
                        );
                    })}
                </View>
            </Fragment>
        );
    };

    render() {
        const chunkedCategories = _.chunk(CATEGORIES, 2);
        console.log(chunkedCategories);
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={APP_STYLES.CONTAINER}>
                    <Title title={'Courses'} />
                    <Description
                        text={'Courses not available right now'}
                        viewStyle={styles.divideContainer}
                    />
                    <View style={styles.flatlistContainer}>
                        <FlatList
                            keyExtractor={item => item[0].id + item[1].name}
                            data={chunkedCategories}
                            renderItem={this.renderItem}
                            contentContainerStyle={
                                styles.flatlistContentContainer
                            }
                            bounces={false}
                            showsVerticalScrollIndicator={false}
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
});
