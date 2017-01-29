/**
 * Created on 20/01/2017.
 */
import React, {Component} from 'react';
import {Text, Navigator, TextInput, TouchableHighlight, View, Image,StyleSheet, BackAndroid} from 'react-native';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');
import s from './LoginPageStyle';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    ValideDateNickName() {
        this.props.navigator.push(this.props.routes[1]);
    }

    render() {

        /*Function when user pressing "back" button on his device */
        BackAndroid.addEventListener("hardwareBackPress", () => {
            if ( this.props.navigator.getCurrentRoutes().length > 1) {
                this.props.navigator.pop();
                return true; // do not exit app
            } else {
                return false; // exit app
            }
        });
        return (
                <View  style={s.mainContainer}>
                    <View style={s.top}>
                        <Image style={s.img} source={require('./img/logo.png')} />
                    </View>

                    <View style={s.midle} >
                        <TextInput
                            style={s.textinput}
                            placeholder={'Login'}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                    </View>

                    <View style={s.bottom} >
                        <TouchableHighlight onPress={() => this.ValideDateNickName()} style={s.button}>
                            <Text style={s.buttonText}>Connection </Text>
                        </TouchableHighlight>
                    </View>
                </View>
        );
    }

}
