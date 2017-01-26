/**
 * Created on 20/01/2017.
 */
import React, {Component} from 'react';
import {Text, Navigator, TextInput, TouchableHighlight, View, Image,StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');
import s from './LoginPageStyle';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {text: 'Login'};
    }

    // Fonction qui récupère la position actuelle de l'utilisateur
    ValideDateNickName() {
        this.props.navigator.push(this.props.routes[1]);
    }

    render() {
        return (
                <View  style={s.mainContainer}>


                    <View style={s.top}>
                        <Image style={s.img} source={require('./img/logo.png')} />
                    </View>

                    <View style={s.midle} >
                        <TextInput
                            style={s.textinput}
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
