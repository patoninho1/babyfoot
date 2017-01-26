/**
 * Created on 20/01/2017.
 */
import React, {Component} from 'react';
import {Text, Navigator, TextInput, TouchableHighlight, View, Image,StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');
{/*import styles from './style.css';*/}

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {text: 'Placeholder'};
    }

    // Fonction qui récupère la position actuelle de l'utilisateur
    ValideDateNickName() {
        this.props.navigator.push(this.props.routes[1]);
    }

    render() {
        return (

                <View style={{flex: 1}} >

                    <Image source={require('./img/logo.png')} />

                    <View style={{flex: 1, alignItems: 'stretch', backgroundColor: 'powderblue'}} />
                    <View style={{flex: 2, alignItems: 'stretch', backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, alignItems: 'stretch', backgroundColor: 'steelblue'}} />


                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />

                    <TouchableHighlight onPress={() => this.ValideDateNickName()} style={styles.button}>
                        <Text style={styles.buttonText}>Confirm </Text>
                    </TouchableHighlight>

                </View>





        );


    }

}



const styles = StyleSheet.create({

    button: {
        height: 40,
        backgroundColor: 'blue',
        borderColor: 'blue',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
        color: 'white',
    },
});