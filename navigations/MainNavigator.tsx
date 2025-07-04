import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Screen4 from "../screens/Screen4";

const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MyTops" component={MyTops} />
        </Stack.Navigator>
    )
}

const Top = createMaterialTopTabNavigator()

function MyTops() {
    return (
        <Top.Navigator>
            <Top.Screen name="Screen1" component={Screen1} />
            <Top.Screen name="Screen2" component={Screen2} />
            <Top.Screen name="Screen3" component={Screen3} />
            <Top.Screen name="Screen4" component={Screen4} />
        </Top.Navigator>
    )
}

export default function NavegadorPrincipal() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}