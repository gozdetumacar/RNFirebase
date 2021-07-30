import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { uname } from '~/redux/actions/user';

import { connect } from 'react-redux';
import { USER_LOGOUT } from '~/redux/actions/user';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
    USER_LOGOUT: () => dispatch(USER_LOGOUT())
});

const Profile = connect(mapStateToProps, mapDispatchToProps)(props => {

    const { navigation } = props;

    const { user } = props;

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            
        }}>
            <Text style={{
                fontSize: 40,
                color: 'white',
                backgroundColor: '#4B7EE7',
                padding: 10,
                borderRadius: 10,
                marginTop:230
            }}>MERHABA {uname}</Text>

            <TouchableOpacity
                onPress={() => [
                    props.USER_LOGOUT(),
                    navigation.navigate('Main')]}>
                <Text style={{
                    backgroundColor: '#4B7EE7',
                    color: 'white',
                    fontSize: 20,
                    marginTop: 70,
                    padding: 10,
                    borderRadius: 10
                }}>Çıkış Yap</Text>
            </TouchableOpacity>
        </View>
    );
});

export { Profile } ;