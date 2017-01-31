/**
 * Created on 20/01/2017.
 */

import React, {Component} from 'react';
import {TextInput, TouchableOpacity, Modal, Text, Navigator, TouchableHighlight, StyleSheet, View, Alert} from 'react-native';
import MapView from 'react-native-maps';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            newbabyfoot: false,
            titre:'',
            latitude:0,
            longitude:0,
            description:'',
            markers: [
                {coordinate: {latitude: 48.8589507, longitude: 2.2575174}, title: "Chez michel", description: "venez comme vous êtes", color:'green'},
                {coordinate: {latitude: 48.8889507, longitude: 2.2375174}, title: "Bar st Andre", description: "pas cher", color:'red'},
                {coordinate: {latitude: 48.8789507, longitude: 2.2475174}, title: "Sale de jeux", description: "lieu climatise", color:'red'},
                {coordinate: {latitude: 48.8689507, longitude: 2.2675174}, title: "lite cafee", description: "jouez dans le silence", color:'red'},
            ],
            markerGeolocalisation: []
        };
    }

    /* Button to prevent that the user want a new babyfoot*/
    AddBabyButton() {
        this.setState({modalVisible: true});
    }

    /*Operation to validate the new babyfoot */
    ValidateBabyfootCreation() {
        this.setState({modalVisible: false});

        /*Prevent the user that he need to click on the map*/
        Alert.alert(
            'New Babyfoot Location',
            'Please select a place on the map',
            [
                {text: 'OK'},
            ]
        );

        this.setState({newbabyfoot: true});
    }

    GeolocButton() {
        navigator.geolocation.getCurrentPosition(
            /*Get the current user localisation*/
            (position) => {
                this.setState({
                    markerGeolocalisation: this.state.markerGeolocalisation = [{
                        coordinate: {latitude:position.coords.latitude, longitude:position.coords.longitude
                        },
                        color:'blue'
                    }]
                });

                /*Moove the map on the user localisation*/
                this.refs.map.animateToRegion({
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002,
                    latitude: position.coords.latitude,
                    longitude : position.coords.longitude }, 3000);
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: false, timeout: 30000, maximumAge: 1000}
        );
    }

    /*Function to create the babyfoot marker*/
    CreationNewBabyFootMarker() {
        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: {latitude: this.state.latitude, longitude: this.state.longitude},
                    title: this.state.titre,
                    description: this.state.description,
                    color: 'green',
                },
            ],
        });

        /*Prevent the user that he need to click on the map*/
        Alert.alert(
            'Confirmation',
            'Your babyfoot has been perfectly added',
            [
                {text: 'OK'},
            ]
        );

        this.setState({titre:''});
        this.setState({description:''});
        this.setState({newbabyfoot: false});
    }

    onMapPress(event) {
        /*Check if we need to create a new babyfoot */
        if (this.state.newbabyfoot==true) {
            /*Getting LatLng of the point pressed on the map */
            this.setState({latitude: this.state.latitude = event.nativeEvent.coordinate.latitude});
            this.setState({longitude: this.state.longitude = event.nativeEvent.coordinate.longitude});

            this.CreationNewBabyFootMarker();
        }
    }


    render() {
        return (
            <View style={styles.container}>

                <MapView ref="map" style={styles.map}
                         initialRegion={{
                             latitude: 48.8589507,
                             longitude: 2.2775174,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421,
                         }}
                         onPress={(event) => this.onMapPress(event)}
                >

                    {this.state.markers.map((marker, i) => (
                        <MapView.Marker key={i}
                                        coordinate={marker.coordinate}
                                        title={marker.title}
                                        description={marker.description}
                                        pinColor={marker.color}
                        />
                    ))}

                    {this.state.markerGeolocalisation.map((marker, i) => (
                        <MapView.Marker key={i}
                                        coordinate={marker.coordinate}
                                        pinColor={marker.color}
                        />
                    ))}

                </MapView>

                <View style={styles.buttonContainer}>
                    <TouchableHighlight onPress={() => this.AddBabyButton()} style={styles.button}>
                        <Text style={styles.buttonText}>Add a baby</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.GeolocButton()} style={styles.button}>
                        <Text style={styles.buttonText}>Find me</Text>
                    </TouchableHighlight>

                    <Text style={styles.bottomText}>You are not tracked</Text>
                </View>





                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}

                    onRequestClose={() => {
                        alert("Modal has been closed.")
                    }} >



                    <View style={styles.modalstyle}>

                            <Text>Please entrer the information for the new babyfoot :</Text>

                            <TextInput
                                style={styles.titre}
                                onChangeText={(text) => this.setState({titre: this.state.titre = text})}
                                placeholder = {'Titre'}
                           />

                            <TextInput
                                style={styles.description} multiline={true} numberOfLines={4}
                                onChangeText={(text) => this.setState({description: this.state.description = text})}
                                placeholder = {'Description'}
                            />

                            <TouchableHighlight
                                onPress={() => this.ValidateBabyfootCreation()}
                                style={styles.button}>
                                <Text style={styles.buttonText}>Validate</Text>
                            </TouchableHighlight>

                    </View>
                </Modal>



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
        height: window.height,
        width: window.width,
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: window.width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 40,
        width: 150,
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


    modalstyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titre: {
        fontSize: 30,
        padding: 10,
        height: 80,
        width:250,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 20,
        padding: 10,
        height: 150,
        width:250,
        borderColor: 'grey',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        height: 80,
        width:200,
        borderColor: 'gray',
        borderWidth: 1,
    },
    bottomText: {
        height: 40,
        fontSize: 20,
        width:window.width,
    },
});