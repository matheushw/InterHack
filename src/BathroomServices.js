import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class BathroomServices extends Component {
    static navigationOptions = ({ navigation }) => {
        return {

            headerTitle: "Solicitação de Serviços",

        }
    };

    render() {
        return (
            <View style ={{flex: 1}}>
                <View style={styles.container}>
                    <View style={{ flex: 3 }}>
                        <Text> Bora no banheiro</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home_Screen')}
                        style={styles.button}>
                        <Text style={{ color: "#FFFFFF", fontSize: 15 }}>Papel Higiênico</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home_Screen')}
                        style={styles.button}>
                        <Text style={{ color: "#FFFFFF", fontSize: 15 }}>Papel para secar as mãos</Text>
                    </TouchableOpacity>
               
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home_Screen')}
                        style={styles.button}>
                        <Text style={{ color: "#FFFFFF", fontSize: 15 }}>Sabonete Líquido</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

//#fa9e2c - Laranja
//#01a1c0 -Azul
//#2da4cd - Azul Claro

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
        width: 200,
        height: 45,
        backgroundColor: '#00bde3',
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    }

});