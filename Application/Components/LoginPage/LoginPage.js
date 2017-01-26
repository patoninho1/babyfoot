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
        this.state = {text: 'Login'};
    }

    // Fonction qui récupère la position actuelle de l'utilisateur
    ValideDateNickName() {
        this.props.navigator.push(this.props.routes[1]);
    }

    render() {
        return (
                <View  style={styles.mainContainer}>


                    <View style={styles.top}>
                        <Image style={styles.img} source={require('./img/logo.png')} />
                    </View>

                    <View style={styles.midle} >
                        <TextInput
                            style={styles.textinput}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                    </View>

                    <View style={styles.bottom} >
                        <TouchableHighlight onPress={() => this.ValideDateNickName()} style={styles.button}>
                            <Text style={styles.buttonText}>Connection </Text>
                        </TouchableHighlight>
                    </View>



                </View>
        );


    }

}



const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
    },

    top: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: 'steelblue',
        justifyContent: 'center',
    },
    midle: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: 'skyblue',
        justifyContent: 'center',
    },
    bottom: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'powderblue',
        justifyContent: 'center',
    },


    img: {
        marginTop: 15,
        height:300,
        width:360,
    },
    textinput: {
        fontSize: 30,
        padding: 10,
        height: 80,
        width:250,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    text: {
        height: 80,
        width:200,
        borderColor: 'gray',
        borderWidth: 1,
    },
    button: {
        height: 80,
        width:250,
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