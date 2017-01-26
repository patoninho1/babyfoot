/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Navigation from './Application/Router/Navigation'

export default class app_babyfoot extends Component {
    render() {
        return (
            <Navigation />
        );
    }
}

AppRegistry.registerComponent('app_babyfoot', () => app_babyfoot);