import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from '../screens/auth/SignUp';
import Login from '../screens/auth/Login';

const Stack = createStackNavigator();

function AuthStackNavigation() {
    return (

        <Stack.Navigator>
            <Stack.Screen name={"login"} component={Login} options={{
                headerShown: false
            }}></Stack.Screen>
            <Stack.Screen name={"sign-up"} component={SignUp} options={{ headerShown: false }}></Stack.Screen>

        </Stack.Navigator>

    )

}
export default AuthStackNavigation
