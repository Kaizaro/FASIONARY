import React, {Component} from 'react';
import {
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {width, height} from '../../Init';
import {scaleHorizontal, scaleVertical} from '../../../../helpers/lib/util';
import _ from 'lodash';

import DictionarySmallCard from '../../../components/dictionary/DictionarySmallCard';
import {APP_STYLES} from '../../../../helpers/styleguide/Styles';
import Divide from '../../../components/common/Divide';
import {TagRow} from '../../../components/common/TagRow';
import {SUBCATEGORIES} from '../../../../constants/data/dictionary/SubCategories';
import {LIBRARY} from '../../../../constants/data/library/Library';
import {BookDescription} from '../../../components/library/BookDescription';
import {APP_COLORS} from '../../../../helpers/styleguide/Colors';

export default class LibraryList extends Component {
    // onCardPress = cardData => {
    //     let oldTagList = [];
    //     this.props.route.params.tagList.map(tag => {
    //         console.log(tag);
    //         oldTagList.push(tag);
    //     });
    //     oldTagList.push(cardData);
    //     if (cardData.name === 'Outwear') {
    //         this.props.navigation.navigate('DynamicGrid', {
    //             tagList: oldTagList,
    //         });
    //     } else {
    //         Alert.alert(
    //             `${cardData.name} is unavailable`,
    //             'Unfortunately, right now this category is not available.',
    //         );
    //     }
    // };

    onBookPress = book => {
        if (book.name === 'The history of Chanel') {
            this.props.navigation.navigate('LibraryView', {book});
        } else {
            Alert.alert(
                `${book.name} is unavailable`,
                'Unfortunately, right now this book is not available.',
            );
        }
    };

    renderItem = ({item, index}) => {
        console.log(item, index);
        return (
            <View style={styles.rowContainer}>
                <BookDescription
                    book={item}
                    color={APP_COLORS.BADGE_COLORS.BLUE}
                    onPress={() => this.onBookPress(item)}
                />
            </View>
        );
    };

    render() {
        const tagList = this.props.route.params.tagList;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={APP_STYLES.CONTAINER}>
                    <Divide />
                    <TagRow tagList={tagList} />
                    {/*<Tag tag={tag} viewStyle={styles.divideContainer} />*/}
                    <View style={styles.flatlistContainer}>
                        <FlatList
                            keyExtractor={item => item.id + item.name}
                            data={LIBRARY}
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
        height: '83%',
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
