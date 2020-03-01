import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';

class App extends Component {
    render() {
        return (
            <SafeAreaView>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Text>All's ok</Text>
                    </PersistGate>
                </Provider>
            </SafeAreaView>
        );
    }
}

export default App;
