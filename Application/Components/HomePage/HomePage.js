/**
 * Created on 20/01/2017.
 */

import React, {Component} from 'react';
import {Text, Navigator, TouchableHighlight, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';

export default class HomePage extends Component {

    AddBaby() {

    }

    Geoloc(){

    }


    render() {
        return (
            <View style={styles.container}>

                <MapView style={styles.map}
                    initialRegion={{
                        latitude: 48.8589507,
                        longitude: 2.2775174,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker
                        coordinate={{latitude: 48.8589507, longitude: 2.2775174,}}
                        title={"dede"}
                        description={"gertrude"}
                    />
                </MapView>



                <View style={styles.buttonContainer}>
                    <TouchableHighlight onPress={() => this.AddBaby()} style={styles.button}>
                        <Text style={styles.buttonText}>Ajouter un baby</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.Geoloc()} style={styles.button}>
                        <Text style={styles.buttonText}>Me localiser</Text>
                    </TouchableHighlight>
                </View>

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
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 480,
        width: window.width
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: window.width,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    button: {
        height: 60,
        width:150,
        margin: 15,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'skyblue',
        borderWidth: 2,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },

});