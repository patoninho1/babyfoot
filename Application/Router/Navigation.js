/**
 * Created on 20/01/2017.
 */
import React, {Component} from 'react';
import {Text, Navigator, TouchableHighlight, StyleSheet, View} from 'react-native';
import LoginPage from '../Components/LoginPage';
import MenuPage from '../Components/MenuPage';
import HomePage from '../Components/HomePage';

const routes = [
    {title: 'First Scene', index: 0},
    {title: 'Second Scene', index: 1},
    {title: 'Third Scene', index: 2},
];

export default class Navigation extends Component {

    render() {
        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                configureScene={(route, routeStack) =>
                    Navigator.SceneConfigs.FadeAndroid}
                renderScene={(route, navigator) => this.renderScene(route, navigator)
                }
            />
        );
    }


    renderScene(route, navigator) {

        if (route.index === 0) {
            return (
                <LoginPage navigator={navigator} routes={routes}/>
            );
        }

        if (route.index === 1) {
            return (
                <MenuPage navigator={navigator} routes={routes}/>
            );
        }

        if (route.index === 2) {
            return (
                <HomePage navigator={navigator} routes={routes}/>
            );
        }
    }
}


const styles = StyleSheet.create({});