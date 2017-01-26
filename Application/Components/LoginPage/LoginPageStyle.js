/**
 * Created on 27/01/2017.
 */

import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({

    mainContainer: {
        flex: 1,
    },

    top: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: 'steelblue',
        justifyContent: 'center',
    },
    midle: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: 'skyblue',
        justifyContent: 'center',
    },
    bottom: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'powderblue',
        justifyContent: 'center',
    },


    img: {
        marginTop: 15,
        height:300,
        width:360,
    },
    textinput: {
        fontSize: 30,
        padding: 10,
        height: 80,
        width:250,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    text: {
        height: 80,
        width:200,
        borderColor: 'gray',
        borderWidth: 1,
    },
    button: {
        height: 80,
        width:250,
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