import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from './Home';
import Scanner from './Scanner';
import QRCodeData from './QRCodeData';
import RoomServices from './RoomServices'
import BathroomServices from './BathroomServices'

const homeStack = createStackNavigator(
    {
        Home_Screen: Home,
        Scanner_Screen: Scanner,
        QRCodeData: QRCodeData,
        BathroomServices_Screen: BathroomServices,
        RoomServices_Screen: RoomServices
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: '#00bde3',
            },
            headerTitleStyle: {
                textAlign: "center",
                justifyContent: "center",
                fontSize: 26,
                alignItems: "center",
                flex: 1,
                alignSelf: "center",
                fontWeight: 'bold'
            },
        }
    }
);

const homeContainer = createAppContainer(homeStack);

export default homeContainer;