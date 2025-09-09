// App.js
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen.jsx";
import NovaRoletaScreen from "./screens/NovaRoletaScreen.jsx";
import ModelosProntos from "./screens/ModelosProntos.jsx";
import RoletaScreen from "./screens/RoletaScreen.jsx";
import RoletaProntaScreen from "./screens/RoletaProntaScreen.jsx";

import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function App() {
    // carregamento das fontes
    const [fontsLoaded] = useFonts({
        "Baloo-Regular": require("./fonts/Baloo-Regular.ttf"),
    });

    if (!fontsLoaded) return null;

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* Tela inicial */}
                <Stack.Screen name="Home" component={HomeScreen} />
                {/* Tela de criar nova roleta */}
                <Stack.Screen name="NovaRoletaScreen" component={NovaRoletaScreen} />
                {/* Tela de modelos prontos */}
                <Stack.Screen name="ModelosProntos" component={ModelosProntos} />
                {/* Tela da roleta em si (recebe dados da NovaRoletaScreen) */}
                <Stack.Screen name="Roleta" component={RoletaScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
