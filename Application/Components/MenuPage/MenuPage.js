/**
 * Created on 20/01/2017.
 */

import React, {Component} from 'react';
import {Text, Navigator, TouchableHighlight, StyleSheet, View} from 'react-native';


export default class HomePage extends Component {

    Disconnect() {
        this.props.navigator.push(this.props.routes[0]);
    }

    GoToMap() {
        this.props.navigator.push(this.props.routes[2]);
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight onPress={() => this.GoToMap()} style={styles.button}>
                    <Text style={styles.buttonText}>Ecran principal</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.Disconnect()} style={styles.button}>
                    <Text style={styles.buttonText}>Déconnection</Text>
                </TouchableHighlight>

            </View>
        );


    }

}

const styles = StyleSheet.create({
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