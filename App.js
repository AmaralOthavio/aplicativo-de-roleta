import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import NovaRoleta from "./screens/NovaRoleta.jsx"
import ModelosProntos from "./screens/ModelosProntos.jsx"
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false }} name={"Home"} component={HomeScreen}/>
                <Stack.Screen name="NovaRoleta" component={NovaRoleta} />
                <Stack.Screen name="ModelosProntos" component={ModelosProntos} />
            </Stack.Navigator>
        </NavigationContainer>
    )}