import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Login  from "./src/screens/Login/Login";
import  Register  from "./src/screens/Register/Register";
import Homemenu  from "./src/components/Homemenu";
const Stack = createNativeStackNavigator();


export default function App() {
  return (
   
   <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Login" component={ Login } options={ { headerShown: false } } />
        <Stack.Screen name="Register" component={ Register } options={ { headerShown: false } }  />
        <Stack.Screen name="Homemenu" component={ Homemenu } options={ { headerShown: false } }  />
      
     </Stack.Navigator>
   </NavigationContainer>

  );
}

