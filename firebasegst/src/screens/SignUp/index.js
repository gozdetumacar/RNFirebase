import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { USER_SIGNUP } from '~/redux/actions/user';

const styles = StyleSheet.create({
  
    button: {
        backgroundColor: '#4B7EE7',
        padding: 10,
        marginBottom: 30,
        borderRadius: 10
    },

    text: {
        fontSize: 15,
        color: 'white'
    },
    tinput: {
        borderWidth: 1,
        borderColor: '#4B7EE7',
        marginBottom: 10,
        width: '90%',
        borderRadius: 10
    }
})

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
    USER_SIGNUP: (nm, snm, mail, psw) => dispatch(USER_SIGNUP(nm, snm, mail, psw))
});

const SignUp = connect(mapStateToProps, mapDispatchToProps)(props => {

    const { navigation } = props;

    const [nm, setName] = useState('');
    const [snm, setSurname] = useState('');
    const [mail, setEmail] = useState('');
    const [psw, setPassword] = useState('');
    
    const {user} = props;

    return (
        <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent:'center'
        }}>
            <Text>Sign Up sayfası</Text>
            <TextInput style={styles.tinput}
                placeholder='Ad'
                value={nm}
                onChangeText={setName}></TextInput>
            <TextInput style={styles.tinput}
                placeholder='Soyad'
                value={snm}
                onChangeText={setSurname}></TextInput>
            <TextInput style={styles.tinput}
                placeholder='Email'
                value={mail}
                onChangeText={setEmail}></TextInput>
            <TextInput style={styles.tinput}
                placeholder='Şifre'
                value={psw}
                onChangeText={setPassword}
                secureTextEntry></TextInput>
            <TouchableOpacity
                style={styles.button}
                onPress={() => [
                    props.USER_SIGNUP(nm, snm, mail, psw),
                    navigation.navigate('Login')
                ]}
                 >
                <Text style={styles.text}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    );
    });

export { SignUp } ;