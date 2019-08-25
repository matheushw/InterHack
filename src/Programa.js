// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import { Button } from 'native-base';

// export default class Programa extends Component {
//     static navigationOptions = ({ navigation }) => {
//         return {
//             headerTitle: "Programação",
//             headerRight: (
//                 <View style={{ width: 40, height: 40 }}></View>
//             ),
//         }
//     };
//     constructor(props) {
//         super(props);
//         this.state = {
//           tableHead: ['', 'Seg', 'Ter', 'Qua', 'Qui','Sex'],
//           tableTitle: ['8:00', '9:45', '10:00', '11:45', '12:00', '13:45','14:00', '15:45', '16:00', '17:45', '18:00', '19:00', '20:45', '21:00', '22:45'],
//           tableData: [
//             ['','1', '2', '3', 'MVGafec', 'ervervevrrvs'],
//             ['','1', '2', '3', 'ervevev', 'erverv'],
//             ['','1', '2', '3', '', ''],
//             ['','1', '2', '3', '', ''],
//             ['','1', '2', '3', '', ''],
//             ['','1', '2', '3', '', ''],
//             ['','1', '2', '3', '', ''],
//             ['','1', '2', '3', '', ''],
//             ['','1', '2', '3', '', ''],
//             ['','1', '2', '3', '', ''],
//             ['','1', '2', '3', '', ''],
//             ['','1', '2', '3', '', ''],
//             ['','1', '2', '3', '', ''],
//             ['','1', '2', '3', '', ''],
//             ['','1', '2', '3', '', ''],
            
//           ]
//         }
//       }
//       render() {
//         const state = this.state;
//         return (
//             <View>
//                 <View style = {{flexDirection: 'row'}}>
//                     <TouchableOpacity
//                         onPress={() => {
//                             this.setModalVisible(true);
//                           }}>
//                         <Text>Seg</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         onPress={() => {
//                             this.setModalVisible(true);
//                           }}>
//                         <Text>Ter</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         onPress={() => {
//                             this.setModalVisible(true);
//                           }}>
//                         <Text>Qua</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         onPress={() => {
//                             this.setModalVisible(true);
//                           }}>
//                         <Text>Qui</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         onPress={() => {
//                             this.setModalVisible(true);
//                           }}
//                         style={}>
//                         <Text>Sex</Text>
//                     </TouchableOpacity>
//                 </View>
//                <View style={styles.container}>
//                     <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
//                     <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
//                     <Rows data={state.tableData} textStyle={styles.text}/>
//                     </Table>
//                 </View> 
//             </View>
          
//         )
//       }
//     }
     
//     const styles = StyleSheet.create({
//       container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//       head: { height: 40, backgroundColor: '#f1f8ff' },
//       text: { margin: 6 }

      
//     });