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
import {SUBCATEGORIES} from '../../../../constants/data/dictionary/SubCategories';
import {COURSES} from '../../../../constants/data/courses/Courses';
import {CourseCategoryDescription} from '../../../components/courses/CouseCategoryDescription';

export default class SubCourses extends Component {
    onCoursePress = course => {
        if (course.name === 'Styling') {
            this.props.navigation.navigate('CourseDetail', {course});
        } else {
            Alert.alert(
                `${course.name} is unavailable`,
                'Unfortunately, right now this course is not available.',
            );
        }
    };

    renderItem = ({item, index}) => {
        console.log(item, index);
        return (
            <View style={styles.rowContainer}>
                <CourseCategoryDescription
                    course={item}
                    color={item.color}
                    onPress={() => this.onCoursePress(item)}
                />
            </View>
        );
    };

    render() {
        const data = this.props.route.params.course;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={APP_STYLES.CONTAINER}>
                    <Divide />
                    <View style={styles.title}>
                        <Text style={APP_STYLES.TITLE_TEXT}>{data.name}</Text>
                    </View>
                    <View style={styles.flatlistContainer}>
                        <FlatList
                            bounces={false}
                            keyExtractor={item => item.id + item.name}
                            data={COURSES}
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
        width: '100%',
        marginTop: scaleVertical(10),
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
    title: {
        width: '100%',
        marginTop: scaleVertical(10),
    },
});
