import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigation from "./HomeStackNavigation";
import AuthStackNavigation from "./AuthStackNavigation";


const  RootNavigation = () => {
    return(
        <NavigationContainer>

            {/* <HomeStackNavigation /> */}
<AuthStackNavigation />
        </NavigationContainer>
    )
}

export default RootNavigation;