import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigation from "./HomeStackNavigation";


const  RootNavigation = () => {
    return(
        <NavigationContainer>

            <HomeStackNavigation />
        </NavigationContainer>
    )
}

export default RootNavigation;