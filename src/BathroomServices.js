import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';
//import firebase from 'firebase';

export default class BathroomServices extends Component {

    constructor(props){
        super(props);

        this.state = {
            sala: ''
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {

            headerTitle: "Banheiro",
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
                        onPress={() => 
                            //let solicitacao = firebase.database().ref('banheiro/higienico');
                            //let chave = solicitacao.push().key;
                            //solicitacao.child(chave).set({
                            //    sala: this.state.sala
                            //});
                            //alert("Solicitação realizada com sucesso!");
                            this.props.navigation.navigate('Home_Screen')
                        }
                        style={styles.button}>
                        <Image style={{ width: 80, height: 80}} source= {require('qrCodeApp/src/images/papel.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => 
                            //let solicitacao = firebase.database().ref('banheiro/maos');
                            //let chave = solicitacao.push().key;
                            //solicitacao.child(chave).set({
                            //    sala: this.state.sala
                            //});
                            //alert("Solicitação realizada com sucesso!");
                            this.props.navigation.navigate('Home_Screen')
                        }
                        style={styles.button}>
                        <Image style={{ width: 80, height: 80}} source= {require('qrCodeApp/src/images/papel_toalha.png')} />
                        
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => 
                            //let solicitacao = firebase.database().ref('banheiro/sabonete');
                            //let chave = solicitacao.push().key;
                            //solicitacao.child(chave).set({
                            //    sala: this.state.sala
                            //});
                            //alert("Solicitação realizada com sucesso!");
                            this.props.navigation.navigate('Home_Screen')
                        }
                        style={styles.button}>
                        <Image style={{ width: 80, height: 80}} source= {require('qrCodeApp/src/images/sabonete.png')} />
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