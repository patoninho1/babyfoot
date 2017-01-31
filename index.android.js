/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    AsyncStorage,
    Text,
    View,
} from 'react-native';

import Navigation from './Application/Router/Navigation'

export default class app_babyfoot extends Component {

    /*Function to generate guid*/
    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    render() {

        try {
            AsyncStorage.getItem('guid', (err, result) => {
                 /*If no guid yet, then create it */
                if (result==null) {
                    var guid = this.guid();
                    /*We stock the guid in the local storage*/
                    AsyncStorage.setItem('guid', guid);
                } else {
                }
            });
        } catch (error) {
            // Error retrieving data
        }

        return (
            <Navigation />
        );
    }
}

AppRegistry.registerComponent('app_babyfoot', () => app_babyfoot);