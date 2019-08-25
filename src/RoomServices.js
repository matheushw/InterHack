import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default class RoomServices extends Component {
    static navigationOptions = ({ navigation }) => {
        return {

            headerTitle: "Solicitação de Serviços",

        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 3}}>
                    <Text>sala</Text>
                </View>
            </View>
        );
    }
}