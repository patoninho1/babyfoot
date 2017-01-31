/**
 * Created by Samy on 31/01/2017.
 */

import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 80,
        width:250,
        margin:20,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'skyblue',
        borderWidth: 2,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: '500',
        color: 'white'
    },
});