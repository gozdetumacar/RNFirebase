import React, { useState, useEffect } from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash, Main, Login, SignUp, Profile} from '~screens';

const STACK1 = createStackNavigator();

const Navigation = () => {

    const [showSplash, setShowSplash] = useState(true);

    useEffect(
        () => {
            setTimeout(() => {
                setShowSplash(false);
            }, 2000)
        }, []
    );

    return (

        <>
            <NavigationContainer>
                <STACK1.Navigator headerMode={'none'}>
                    <STACK1.Screen
                        name={showSplash ? 'Splash' : 'Main'}
                        component={showSplash ? Splash : Main}
                    />
                    <STACK1.Screen name='Login' component={Login} />
                    <STACK1.Screen name='SignUp' component={SignUp} />
                    <STACK1.Screen name='Profile' component={Profile} />
                    
                </STACK1.Navigator>
                
            </NavigationContainer>
        </>
    );
};

export { Navigation };