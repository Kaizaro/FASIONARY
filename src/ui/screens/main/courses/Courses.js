import React, {Component, Fragment} from 'react';
import {
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {scaleVertical} from '../../../../helpers/lib/util';
import Title from '../../../components/common/Title';
import Description from '../../../components/common/Description';
import {APP_STYLES} from '../../../../helpers/styleguide/Styles';
import DictionarySmallCard from '../../../components/dictionary/DictionarySmallCard';
import _ from 'lodash';
import {CATEGORIES} from '../../../../constants/data/dictionary/Categories';
import {COURSES} from '../../../../constants/data/courses/Courses';
import {CourseCategory} from '../../../components/courses/CourseCategory';

const description =
    "We offer best and most relevant courses by top professionals of fashion industry for our students. All you want to learn it's at one place. Learn new. Expand your vision. Be unique.";

export default class Courses extends Component {
    onCoursePress = course => {
        console.log(course);
        if (course.name === 'Fashion Design') {
            this.props.navigation.navigate('SubCourses', {course});
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
                    <Title title={'Courses'} />
                    {/*<Description*/}
                    {/*    text={'Courses not available right now'}*/}
                    {/*    viewStyle={styles.divideContainer}*/}
                    {/*/>*/}
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
