import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import QRCodeScanner from "react-native-qrcode-scanner";

export default class Scanner extends Component {
    static navigationOptions = ({ navigation }) => {
        return {

            headerTitle: "Scan QR",
            headerRight: (
                <View style={{ width: 40, height: 40 }}></View>
            ),
        }
    };

    onSuccess = async e => {

        let sala = e.data.charAt(1);
        sala += e.data.charAt(2);
        sala += e.data.charAt(3);

        if (e.data.charAt(0) == 'B'){
            this.props.navigation.navigate("BathroomServices_Screen", { sala },)
        }

        if (e.data.charAt(0) == 'R'){
            this.props.navigation.navigate("RoomServices_Screen", { sala },)
        }
    };
    
    render() {
        return (
            <View style={styles.container}>
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
        backgroundColor: '#00aed1'
    }
});
