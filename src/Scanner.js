import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import QRCodeScanner from "react-native-qrcode-scanner";

export default class Scanner extends Component {
    static navigationOptions = ({ navigation }) => {
        return {

            headerTitle: "Scan QR",

        }
    };

    onSuccess = async e => {

        if (e.data.charAt(0) == 'B'){
            this.props.navigation.navigate("BathroomServices_Screen")
        }

        if (e.data.charAt(0) == 'R'){
            this.props.navigation.navigate("Home_Screen")
        }
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Esse é o Scanner</Text>
                <QRCodeScanner
                    onRead = {this.onSuccess}
                    showMarker = {true}
                    checkAndroid6Permissions={true}
                    ref={elem =>{this.scanner = elem;}}
                    cameraStyle={{height: Dimensions.get("window").height}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#4287f5'
    }
});
