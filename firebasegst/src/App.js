import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Navigation } from './Navigation';
import { Provider } from 'react-redux';
import store from './redux/index';


const App = () => {

    return (
        <>
            <StatusBar backgroundColor={'#999999'} />
            <View style={{
                flex: 1

            }}>
               
                <Provider store={store}>
                    <Navigation />
                </Provider>
            </View>
        </>
    );
};

export default App ;