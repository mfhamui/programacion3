import  React  from "react";
import { Text } from "react-native-web";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Usuarios from "../screens/Usuarios/Usuarios";
import Post from "../screens/NuevoPost";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';




const Tab = createBottomTabNavigator();


function Homemenu(params) {
    return(
     
     <Tab.Navigator screenOptions={ { tabBarShowLabel: false ,  headerShown: false } }>
        <Tab.Screen name="Home" component={ Home } options={ 
	 { tabBarIcon: () => <FontAwesome name="home" size={24} color="black" /> } } />
        <Tab.Screen name="Profile" component={ Profile } options={ 
	 { tabBarIcon: () =>  <AntDesign name="profile" size={24} color="black" />  }} />
       <Tab.Screen name="Usuarios" component={ Usuarios } options={ 
	 { tabBarIcon: () =>  <AntDesign name="user" size={24} color="black" />  }} />
    <Tab.Screen name="Post" component={ Post } options={ 
	 { tabBarIcon: () =>  <AntDesign name="plus" size={24} color="black" />  }} />


        
     </Tab.Navigator>
// el navigator container solo va a adentro de app NO SE REPITE

      
      
    )
}


export default Homemenu;