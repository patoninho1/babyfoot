/**
 * Created on 20/01/2017.
 */

import React, {Component} from 'react';
import {TextInput, TouchableOpacity, Modal, Text, Navigator, TouchableHighlight, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {

            modalVisible: false,
            titre:'Titre',
            description:'Description',
            markers: [
                {coordinate: {latitude: 48.8589507, longitude: 2.2575174}, title: "dede", description: "gertrude"},
                {coordinate: {latitude: 48.8889507, longitude: 2.2375174}, title: "dede", description: "gertrude"},
                {coordinate: {latitude: 48.8789507, longitude: 2.2475174}, title: "dede", description: "gertrude"},
                {coordinate: {latitude: 48.8689507, longitude: 2.2675174}, title: "dede", description: "gertrude"},
            ],
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    AddBaby() {

        this.setState({modalVisible: true});

        this.setState({titre:'Titre'});
        this.setState({description:'Description'});

        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: {latitude: 49, longitude: 3},
                    title: "miaous",
                    description: "pokemon",
                    color: "blue",
                },
            ],
        });

    }

    Geoloc() {
    }

    onMapPress(event) {
        console.log("coordonné latitude: " + event.nativeEvent.coordinate.latitude);
        console.log("coordonné longitude: " + event.nativeEvent.coordinate.longitude);
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
                         onPress={(event) => this.onMapPress(event)}
                         showsUserLocation={true}
                >

                    {this.state.markers.map((marker, i) => (
                        <MapView.Marker key={i}
                                        coordinate={marker.coordinate}
                                        title={marker.title}
                                        description={marker.description}
                        />
                    ))}

                </MapView>

                <View style={styles.buttonContainer}>
                    <TouchableHighlight onPress={() => this.AddBaby()} style={styles.button}>
                        <Text style={styles.buttonText}>Ajouter un baby</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.Geoloc()} style={styles.button}>
                        <Text style={styles.buttonText}>Me localiser</Text>
                    </TouchableHighlight>
                </View>






                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}

                    onRequestClose={() => {
                        alert("Modal has been closed.")
                    }} >



                    <View style={styles.modalstyle}>

                            <Text>Entrer les information sur le nouveau babyfoot :</Text>

                            <TextInput
                                style={styles.titre}
                                onChangeText={(text) => this.setState({titre:text})}
                                placeholder = {this.state.titre}
                           />

                            <TextInput
                                style={styles.description} multiline={true} numberOfLines={4}
                                onChangeText={(text) => this.setState({description:text})}
                                placeholder = {this.state.description}
                            />

                            <TouchableHighlight
                                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                                style={styles.button}>
                                <Text style={styles.buttonText}>Valider </Text>
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
        height: 480,
        width: window.width
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: window.width,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button: {
        height: 60,
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
});