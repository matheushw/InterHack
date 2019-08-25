// import React from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';


// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//         <TouchableOpacity
//           style={{ width: 200, height: 50, backgroundColor: '#01a1c0' }}
//           onPress={() => this.props.navigation.navigate('Scanner')}>
//           <Text>Scan Qr</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }


// class Scanner extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Oasjf</Text>
//       </View>
//     );
//   }
// }

// class Scanner extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Oasjf</Text>
//       </View>
//     );
//   }
// }

// const NavegadorStackHome = createStackNavigator({
//   Home: HomeScreen,
//   Scanner: Scanner,
// },
//   {
//     defaultNavigationOptions: {
//       headerTintColor: '#FFFFFF',
//       headerStyle: {
//         backgroundColor: '#01a1c0',
//       },
//       headerTitleStyle: {
//         textAlign: "center",
//         justifyContent: "center",
//         fontSize: 26,
//         alignItems: "center",
//         flex: 1,
//         alignSelf: "center",
//         fontWeight: 'bold'
//       },
//     }
//   }
// );

// const HomeContainer = createAppContainer(NavegadorStackHome);

// export default HomeContainer;

import React, {Component} from "react";
import Routes from "./src/Routes";

export default class App extends Component {
  render () {
    return <Routes />;
  }
}
