import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Cntact from "../screens/Contact";

const Stack = createStackNavigator()

const HomeStackNavigation = () => {


    return(
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={Home}></Stack.Screen>
            <Stack.Screen name={"Contact"} component={Cntact}></Stack.Screen>
        </Stack.Navigator>
    )
}


export default HomeStackNavigation