import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default class RoomServices extends Component {
    static navigationOptions = ({ navigation }) => {
        return {

            headerTitle: "Solicitação de Serviços",
            headerRight: (
                <View style={{ width: 40, height: 40 }}></View>
            ),
        }
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: "center", justifyContent: "space-around" }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home_Screen')}
                        style={styles.button}>
                        <Image style={{ width: 80, height: 80}} source= {require('qrCodeApp/src/images/papel.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home_Screen')}
                        style={styles.button}>
                        <Image style={{ width: 80, height: 80}} source= {require('qrCodeApp/src/images/papel_toalha.png')} />
                        
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home_Screen')}
                        style={styles.button}>
                        <Image style={{ width: 80, height: 80}} source= {require('qrCodeApp/src/images/sabonete.png')} />
                    </TouchableOpacity>
                </View>  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    button: {
        width: 150,
        height: 150,
        backgroundColor: '#00aed1',
        borderRadius: 15,
        borderRadius: 100,
        marginTop: 45,
        alignItems: "center",
        justifyContent: "center"
    }

});