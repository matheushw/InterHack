import { createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation";

import Home from './Home';
import Scanner from './Scanner';
import QRCodeData from './QRCodeData';
import RoomServices from './RoomServices'
import BathroomServices from './BathroomServices'
import Slider from './Slider'

const homeStack = createStackNavigator(
    {
        Home_Screen: Home,
        Scanner_Screen: Scanner,
        QRCodeData: QRCodeData,
        BathroomServices_Screen: BathroomServices,
        RoomServices_Screen: RoomServices,
        Slider: Slider
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#FFFFFF',
                height: 50,
                borderBottomWidth: 1,
                borderColor: "#cdcdcd",
                elevation: 0

            },
            headerTitleStyle: {
                textAlign: "center",
                justifyContent: "center",
                fontSize: 24,
                alignItems: "center",
                flex: 1,
                alignSelf: "center",
            },
        }
    }
);


const homeContainer = createAppContainer(homeStack);

export default homeContainer;
