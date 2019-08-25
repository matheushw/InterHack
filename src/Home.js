import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

class WrapperComponent extends Component {

    render() {
      return (
        <Image source={someImage}>
            { this.props.children }
        </Image>);
    }
}

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {

            headerTitle: "e-Card",

        }
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View styles = {{flex: 6}}>
                    <View style={{ height: 130, flexDirection: 'row', backgroundColor: '#ffc342', borderBottomWidth: 10, borderBottomColor: '#00bde3', alignSelf: 'stretch' }}>
                        <View>
                            <Image style={{ width: 150, height: 70, margin: 30, marginLeft: 55 }} source={require('qrCodeApp/src/images/usp-logo-080116.gif')}></Image>
                        </View>
                        <View style={{ alignContent: 'flex-end' }}>
                            <Image style={{ width: 100, height: 120, marginLeft: 10, marginLeft: 35 }} source={require('qrCodeApp/src/images/Alexander.jpg')}></Image>
                        </View>
                    </View>
                    <View style={{ height: 60, flexDirection: 'row'}}>
                        <View style={{marginLeft: 10}}>
                            <Text >Alexandre Okamoto Kenji</Text>
                            <Text>11256784</Text>
                        </View>
                        <View>
                            <Image style={{ width: 50, height: 50, marginLeft: 140}} source={require('qrCodeApp/src/images/B102.png')}></Image>
                        </View>
                    </View>

                    <View style={{ height: 60, flexDirection: 'row'}}>
                        <View style={{marginLeft: 10}}>
                            <Text>Escola de Artes, Ciências e Humanidades</Text>
                            <Text>GRADUAÇÃO</Text>
                        </View>
                        <View>
                            <Image style={{ width: 40, height: 40, marginLeft: 45}} source={require('qrCodeApp/src/images/25350.png')}></Image>
                        </View>
                    </View>

                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end", margin: 50}}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Scanner_Screen')}
                        style={styles.button}>
                        <Text style={{ color: "#FFFFFF", fontSize: 20 }}>Escanear QR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Slider')}
                        style={styles.button}>
                        <Text style={{ color: "#FFFFFF", fontSize: 20 }}>Abrir</Text>
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
        alignItems: "center"
    },
    button: {
        width: 180,
        height: 45,
        backgroundColor: '#00aed1',
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    }
});
