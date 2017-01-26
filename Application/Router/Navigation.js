/**
 * Created on 20/01/2017.
 */
import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight, StyleSheet, View} from 'react-native';

import LoginPage from '../Components/LoginPage/LoginPage';
import HomePage from '../Components/HomePage/HomePage'

const routes = [
    {title: 'First Scene', index: 0},
    {title: 'Second Scene', index: 1},

];
export default class Navigation extends Component {

    render() {
        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                configureScene={(route, routeStack) =>
                    Navigator.SceneConfigs.FadeAndroid}
                renderScene={(route, navigator) =>  this.renderScene(route,navigator)
                }
                        />
        );
    }


    renderScene(route,navigator) {

        if (route.index=== 0) {
            return (
                <LoginPage navigator={navigator} routes={routes}/>

            );
        }

        if (route.index=== 1) {
            return (
                <HomePage  navigator={navigator} routes={routes}/>

            );
        }
    }
}


const styles = StyleSheet.create({

});