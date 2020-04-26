import React, {Component, Fragment} from 'react';
import {
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';
import {scaleVertical} from '../../../../helpers/lib/util';
import Title from '../../../components/common/Title';
import Description from '../../../components/common/Description';
import {APP_STYLES} from '../../../../helpers/styleguide/Styles';
import StarButton from '../../../components/common/StarButton';
import {CourseCategory} from '../../../components/courses/CourseCategory';
import {COURSES} from '../../../../constants/data/courses/Courses';

const description =
    "Our library is a great selection of world's best and most rare books about fashion art, design, modelling, sewing and dressing. Create your own book collections, add bookmarks, write personal notes to any page.";

export default class Library extends Component {
    onCoursePress = course => {
        if (course.name === 'Fashion Design') {
            this.props.navigation.navigate('LibraryList', {
                tagList: [course],
            });
        } else {
            Alert.alert(
                'Library is unavailable',
                'Unfortunately, right now library is not available.',
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
                    <CourseCategory
                        color={item.color}
                        course={item.name}
                        onPress={() => this.onCoursePress(item)}
                    />
                </View>
            </Fragment>
        );
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={APP_STYLES.CONTAINER}>
                    <View style={styles.titleContainer}>
                        <Title title={'Library'} />
                        <StarButton />
                    </View>
                    <View style={styles.flatlistContainer}>
                        <FlatList
                            keyExtractor={item => item.id + item.name}
                            data={COURSES}
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
    flatlistContainer: {
        marginTop: scaleVertical(10),
        width: '100%',
        height: '90%',
    },
    flatlistContentContainer: {
        width: '100%',
        paddingBottom: scaleVertical(20),
    },
    rowContainer: {
        marginBottom: scaleVertical(20),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
