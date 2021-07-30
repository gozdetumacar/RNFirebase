import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        backgroundColor: '#4B7EE7',
        padding: 10,
        marginBottom: 30,
        borderRadius:10
    },

    text: {
        fontSize: 25,
        color: 'white'
    }
})

const Main = props => {
    const { navigation } = props;


    return(
        <View style={styles.view1}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login') }>
                <Text style={styles.text}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SignUp')} >
                <Text style={styles.text}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    );
}

export { Main };