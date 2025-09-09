// App.js
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NovaRoletaScreen from "./screens/NovaRoletaScreen.jsx";
import ModelosProntos from "./screens/ModelosProntos.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import RoletaScreen from "./screens/RoletaScreen.jsx";

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        'Baloo-Regular': require('./fonts/Baloo-Regular.ttf'),
    });

    if (!fontsLoaded) return null;

    return (
        <NavigationContainer>
            <Stack.Navigator id={"1"}>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                <Stack.Screen name="NovaRoletaScreen" component={NovaRoletaScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ModelosProntos" component={ModelosProntos} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
