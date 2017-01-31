/**
 * Created on 20/01/2017.
 */

import React, {Component} from 'react';
import {TextInput, TouchableOpacity, Modal, Text, Navigator, TouchableHighlight, StyleSheet, View, Alert} from 'react-native';
import MapView from 'react-native-maps';
import s from './HomePageStyle';
import StarRating from 'react-native-star-rating';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            newbabyfoot: false,
            titre:'',
            starCount: 3.5,
            latitude:0,
            longitude:0,
            description:'',
            markers: [
                ],
            markerGeolocalisation: []
        };
    }

    /*Function called before the page is rendered */
    componentWillMount() {

        /* Uncomment this if you use a real server : */
        /*
         let response = fetch('http://localhost:3000/api/Babyfoot', {
             method: 'GET',
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
             }
         });
         this.setState({markers:response});
         */

        /*For simulate the server call :*/
        this.setState({
            markers: [
                ...this.state.markers,
                {coordinate: {latitude: 48.8589507, longitude: 2.2575174}, title: "Chez michel", description: "venez comme vous êtes", color:'green'},
                {coordinate: {latitude: 48.8889507, longitude: 2.2375174}, title: "Bar st Andre", description: "pas cher", color:'red'},
                {coordinate: {latitude: 48.8789507, longitude: 2.2475174}, title: "Sale de jeux", description: "lieu climatise", color:'red'},
                {coordinate: {latitude: 48.8689507, longitude: 2.2675174}, title: "lite cafee", description: "jouez dans le silence", color:'red'},
            ],
        });


    }

    /*Call when changing the star rating*/
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
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


        /* Uncomment this if you use a real server : */
        /*
         fetch('http://localhost:3000/api/Babyfoot', {
             method: 'POST',
             headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 coordinate: {latitude: this.state.latitude, longitude: this.state.longitude},
                 title: this.state.titre,
                 description: this.state.description,
                 color: 'green',
             })
         });
         */

        /*For simulate the server call :*/
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
            <View style={s.container}>

                <MapView ref="map" style={s.map}
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

                <View style={s.buttonContainer}>
                    <TouchableHighlight onPress={() => this.AddBabyButton()} style={s.button}>
                        <Text style={s.buttonText}>Add a baby</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.GeolocButton()} style={s.button}>
                        <Text style={s.buttonText}>Find me</Text>
                    </TouchableHighlight>

                    <Text style={s.bottomText}>You are not tracked</Text>
                </View>





                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}

                    onRequestClose={() => {
                        alert("Modal has been closed.")
                    }} >



                    <View style={s.modalstyle}>

                            <Text>Please entrer the information for the new babyfoot :</Text>

                            <TextInput
                                style={s.titre}
                                onChangeText={(text) => this.setState({titre: this.state.titre = text})}
                                placeholder = {'Title'}
                           />

                            <TextInput
                                style={s.description} multiline={true} numberOfLines={4}
                                onChangeText={(text) => this.setState({description: this.state.description = text})}
                                placeholder = {'Description'}
                            />
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                        />
                            <TouchableHighlight
                                onPress={() => this.ValidateBabyfootCreation()}
                                style={s.button}>
                                <Text style={s.buttonText}>Validate</Text>
                            </TouchableHighlight>

                    </View>
                </Modal>



            </View>
        );
    }

}
