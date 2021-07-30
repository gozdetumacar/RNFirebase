import * as userTypes from '../types/user';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const USER_LOGIN = (mail, psw, uname, sname) => async dispatch => {
    
    auth()
        .signInWithEmailAndPassword(mail, psw)
        .then(d => {
            console.log('test', d);
            const uid = d.user.uid;
            
            database()
                .ref(`USERS/${uid}/info`)
                .on('value', snapshot => {
                    uname = (snapshot.val().name);
                    sname = (snapshot.val().surname);
                    console.log('User: ', uname + ' ' + sname);
                    alert('Hoşgeldiniz ' + uname + ' ' + sname);
                });
            
            dispatch({
                type: userTypes.USER_LOGIN,
                payload: {
                    uid
                }
            });
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        })

};

export const USER_SIGNUP = (nm, snm, mail, psw) => async dispatch => {

    auth()
        .createUserWithEmailAndPassword(mail, psw)
        .then(d => {
            console.log('test', d);
            const uid = d.user.uid;

            database()
                .ref(`/USERS/${uid}/info`)
                .set({
                    name: nm,
                    surname: snm
                })
                .then(() => console.log('Data set.'));

            dispatch({
                type: userTypes.USER_SIGNUP,
                payload: {
                    uid
                }
            });
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
};

export const USER_LOGOUT = () => async dispatch => {

    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    
    dispatch({
        type: userTypes.USER_LOGOUT
    });
};