import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import test from '../screens/test';
import {BACKGROUND_COLOR} from '../styleguide/Colors';
import Courses from '../screens/main/courses/Courses';
import Dictionary from '../screens/main/dictionary/Dictionary';
import Library from '../screens/main/library/Library';
import Modboards from '../screens/main/modboards/Modboards';

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();
// const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStackSwitcher = () => (
    <AppStack.Navigator initialRouteName={'MainStack'}>
        <AppStack.Screen name={'AuthStack'} component={AuthStackSwitcher} />
        <AppStack.Screen name={'MainStack'} component={MainStackSwitcher} />
    </AppStack.Navigator>
);

const AuthStackSwitcher = props => (
    <AuthStack.Navigator>
        <AuthStack.Screen name={'test'} component={test} />
    </AuthStack.Navigator>
);

const MainStackSwitcher = props => (
    <Tab.Navigator initialRouteName={'Courses'}>
        {console.log(props)}
        <Tab.Screen name={'Courses'} component={Courses} />
        <Tab.Screen name={'Dictionary'} component={Dictionary} />
        <Tab.Screen name={'Library'} component={Library} />
        <Tab.Screen name={'Modboards'} component={Modboards} />
    </Tab.Navigator>
);

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: BACKGROUND_COLOR,
    },
};

const AppNavigator = () => (
    <NavigationContainer theme={theme}>
        <AppStackSwitcher />
    </NavigationContainer>
);

export default AppNavigator;
