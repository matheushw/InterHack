import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Firebase from './firebase'

export default class RoomServices extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sala: this.props.navigation.state.params.sala
        };

        this.cadastrarMouse = this.cadastrarMouse.bind(this);
        this.cadastrarTeclado = this.cadastrarTeclado.bind(this);
        this.cadastrarControle = this.cadastrarControle.bind(this);
        this.cadastrarGiz = this.cadastrarGiz.bind(this);
        this.cadastrarApagador = this.cadastrarApagador.bind(this);
        this.visualizarProgramacao = this.visualizarProgramacao.bind(this);
    }

    cadastrarMouse() {
        let solicitacao = Firebase.database().ref('room/mouse');
        let chave = solicitacao.push().key;
        solicitacao.child(chave).set({
            sala: this.state.sala
        });
        alert("Solicitação realizada com sucesso!");
        this.props.navigation.navigate('Home_Screen')
    }

    cadastrarTeclado() {
        let solicitacao = Firebase.database().ref('room/teclado');
        let chave = solicitacao.push().key;
        solicitacao.child(chave).set({
            sala: this.state.sala
        });
        alert("Solicitação realizada com sucesso!");
        this.props.navigation.navigate('Home_Screen')
    }

    cadastrarControle() {
        let solicitacao = Firebase.database().ref('room/controle');
        let chave = solicitacao.push().key;
        solicitacao.child(chave).set({
            sala: this.state.sala
        });
        alert("Solicitação realizada com sucesso!");
        this.props.navigation.navigate('Home_Screen')
    }

    cadastrarGiz() {
        let solicitacao = Firebase.database().ref('room/giz');
        let chave = solicitacao.push().key;
        solicitacao.child(chave).set({
            sala: this.state.sala
        });
        alert("Solicitação realizada com sucesso!");
        this.props.navigation.navigate('Home_Screen')
    }

    cadastrarApagador() {
        let solicitacao = Firebase.database().ref('room/apagador');
        let chave = solicitacao.push().key;
        solicitacao.child(chave).set({
            sala: this.state.sala
        });
        alert("Solicitação realizada com sucesso!");
        this.props.navigation.navigate('Home_Screen')
    }

    visualizarProgramacao() { }

    static navigationOptions = ({ navigation }) => {
        return {

            headerTitle: "Sala",

            headerRight: (
                <View style={{ width: 40, height: 40 }}></View>
            ),
        }
    };

    render() {
        return (

            
                <View style={{ flex: 1 }}>
                    <ScrollView>
                    <View style={{ alignItems: "center", justifyContent: "space-around" }}>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Programa')}
                            style={styles.button}>
                            <Image style={{ width: 80, height: 80 }} source={require('qrCodeApp/src/images/table.png')} />
                            
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.cadastrarApagador}
                            style={styles.button}>
                            <Image style={{ width: 80, height: 80 }} source={require('qrCodeApp/src/images/blackboard-eraser.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.cadastrarGiz}
                            style={styles.button}>
                            <Image style={{ width: 80, height: 80 }} source={require('qrCodeApp/src/images/chalk.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.cadastrarControle}
                            style={styles.button}>
                            <Image style={{ width: 80, height: 80 }} source={require('qrCodeApp/src/images/remote.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.cadastrarMouse}
                            style={styles.button}>
                            <Image style={{ width: 80, height: 80 }} source={require('qrCodeApp/src/images/mouse.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.cadastrarTeclado}
                            style={styles.button}>
                            <Image style={{ width: 80, height: 80 }} source={require('qrCodeApp/src/images/keyboard.png')} />
                        </TouchableOpacity>

                    </View>
                    </ScrollView>
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
        fontSize: 22,
        textAlign: "center",
        margin: 10
    },
    button: {
        width: 150,
        height: 150,
        backgroundColor: '#00aed1',
        borderRadius: 100,
        marginTop: 45,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonMenor: {
        width: 75,
        height: 75,
        backgroundColor: '#00aed1',
        borderRadius: 15,
        borderRadius: 100,
        marginTop: 45,
        alignItems: "center",
        justifyContent: "center"
    }

});