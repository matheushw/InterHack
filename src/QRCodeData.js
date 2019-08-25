import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

export default class QRCodeData extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Scan QR",
        }
    };
    
    constructor(props){
        super(props);

        this.state = {qrCodeData: " ", scanner: undefined};
    }

    componentDidMount () {
        const qrCodeData = this.props.navigation.getParam("data", "Nenhum dado lido");
        const scanner = this.props.navigation.getParam("scanner",() => false);

        this.setState({ qrCodeData: qrCodeData, scanner: scanner});
    }

    scanQRCodeAgain (){
        this.state.scanner.reactivate();
        this.props.navigation.goBack();
    }

    render() {
        if (this.state.qrCodeData.charAt(0) == 'B'){
            this.props.navigation.navigate("BathroomServices_Screen")
        }

        if (this.state.qrCodeData.charAt(0) == 'R'){
            this.props.navigation.navigate("Home_Screen")
        }
        return (<View></View>);
            // <View style={styles.container}>
            //     <Text style={styles.text}>{this.state.qrCodeData}</Text>
            //     <Button
            //         title={"Scann QRCode Again"}
            //         onPress={() => this.scanQRCodeAgain()}
            //     />
            //     <Button
            //         title={"Home"}
            //         onPress={() => this.props.navigation.popToTop()}
            //     />
            // </View>
    }
    
    //function qual(sala) {
    //      tipo = sala.charAt(0);
        //  sala = sala.substring(1);
    //}
}

const styles = StyleSheet.create ({
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
    }
    
});