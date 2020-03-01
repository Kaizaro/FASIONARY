import React from 'react';
import {View, Text} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import test from '../screens/test';
import {BACKGROUND_COLOR} from '../styleguide/Colors';

const AuthStack = createStackNavigator();

const AuthStackSwitcher = props => (
    <AuthStack.Navigator>
        <AuthStack.Screen name={'test'} component={test} />
        {/*<Stack.Screen name={'Details'} component={DetailsScreen} />*/}
    </AuthStack.Navigator>
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
        <AuthStackSwitcher />
    </NavigationContainer>
);

export default AppNavigator;
