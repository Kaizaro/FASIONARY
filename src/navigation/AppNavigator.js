import React from 'react';
import {Image} from 'react-native';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import test from '../screens/test';
import {
    BACKGROUND_COLOR,
    BADGE_COLORS,
    BLACK_COLOR,
} from '../styleguide/Colors';
import Courses from '../screens/main/courses/Courses';
import Dictionary from '../screens/main/dictionary/Dictionary';
import Library from '../screens/main/library/Library';
import Profile from '../screens/main/profile/Profile';
import DictionaryIcon from '../../assets/icons/tabBarIcons/DictionaryTabIcon.png';
import CoursesIcon from '../../assets/icons/tabBarIcons/CoursesTabIcon.png';
import LibraryIcon from '../../assets/icons/tabBarIcons/LibraryTabIcon.png';
import Init from '../Init';

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStackSwitcher = () => (
    <AppStack.Navigator initialRouteName={'Init'}>
        <AppStack.Screen
            name={'Init'}
            component={Init}
            options={{header: () => null}}
        />
        <AppStack.Screen name={'AuthStack'} component={AuthStackSwitcher} />
        <AppStack.Screen
            name={'MainStack'}
            component={MainStackSwitcher}
            options={{header: () => null}}
        />
    </AppStack.Navigator>
);

const AuthStackSwitcher = props => (
    <AuthStack.Navigator>
        <AuthStack.Screen name={'test'} component={test} />
    </AuthStack.Navigator>
);

const MainStackSwitcher = props => (
    <Tab.Navigator
        initialRouteName={'Dictionary'}
        tabBarOptions={{
            showIcon: true,
            showLabel: false,
            activeTintColor: BADGE_COLORS.SPACE_BLUE,
            inactiveTintColor: BLACK_COLOR,
        }}>
        <Tab.Screen
            name={'Dictionary'}
            component={Dictionary}
            options={{
                tabBarIcon: state => (
                    <Image
                        source={DictionaryIcon}
                        resizeMode={'contain'}
                        style={tabIconStyle(state.focused)}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={'Courses'}
            component={Courses}
            options={{
                tabBarIcon: state => (
                    <Image
                        source={CoursesIcon}
                        resizeMode={'contain'}
                        style={tabIconStyle(state.focused)}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={'Library'}
            component={Library}
            options={{
                tabBarIcon: state => (
                    <Image
                        source={LibraryIcon}
                        resizeMode={'contain'}
                        style={tabIconStyle(state.focused)}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={'Profile'}
            component={Profile}
            options={{
                tabBarIcon: state => (
                    <Image
                        source={CoursesIcon}
                        resizeMode={'contain'}
                        style={tabIconStyle(state.focused)}
                    />
                ),
            }}
        />
    </Tab.Navigator>
);

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: BACKGROUND_COLOR,
    },
};

const tabIconStyle = active => ({
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    tintColor: active ? BADGE_COLORS.SPACE_BLUE : BLACK_COLOR,
});

const AppNavigator = () => (
    <NavigationContainer theme={theme}>
        <AppStackSwitcher />
    </NavigationContainer>
);

export default AppNavigator;
