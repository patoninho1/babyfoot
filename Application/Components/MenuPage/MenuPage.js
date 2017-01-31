/**
 * Created on 20/01/2017.
 */

import React, {Component} from 'react';
import {Text, Navigator, TouchableHighlight, StyleSheet, View} from 'react-native';
import s from './MenuPageStyle';

export default class HomePage extends Component {

    Disconnect() {
        this.props.navigator.pop();
    }

    GoToMap() {
        this.props.navigator.push(this.props.routes[2]);
    }

    render() {
        return (
            <View style={s.container}>

                <TouchableHighlight onPress={() => this.GoToMap()} style={s.button}>
                    <Text style={s.buttonText}>Ecran principal</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.Disconnect()} style={s.button}>
                    <Text style={s.buttonText}>Déconnection</Text>
                </TouchableHighlight>

            </View>
        );


    }

}
