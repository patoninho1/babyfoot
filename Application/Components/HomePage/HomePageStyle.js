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
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: window.height,
        width: window.width,
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: window.width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 40,
        width: 150,
        margin: 15,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'skyblue',
        borderWidth: 2,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },


    modalstyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titre: {
        fontSize: 30,
        padding: 10,
        height: 80,
        width:250,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 20,
        padding: 10,
        height: 150,
        width:250,
        borderColor: 'grey',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        height: 80,
        width:200,
        borderColor: 'gray',
        borderWidth: 1,
    },
    bottomText: {
        height: 40,
        fontSize: 20,
        width:window.width,
    },
});