import  React, {Component}  from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";



class Login extends Component {
  constructor(props) {
    super(props);
  
  }
    render(){
    return(
        <View style= {StyleSheet.container}>
            <Text style={style.titulo}>Ingresar</Text>
        
             <Pressable style={style.botonAzul} 
             onPress={ ()=> this.props.navigation.navigate('Register')} >
                     <Text>Ir al Register </Text>
            </Pressable>
                 
          <Pressable style={style.botonAmarillo} onPress={ ()=> this.props.navigation.navigate('Homemenu')}>
                     <Text> entrar a la app </Text>
            </Pressable>

            </View>
        
    )}
}
const style= StyleSheet.create({
    container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 


    }, 
      titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
    botonAzul: {
    backgroundColor: "#7dc5f5",
    borderRadius: 10,
    alignItems: "center",
    width: 500,
    height: 30,
    margin: 10,
   
  },
  botonAmarillo: {
    backgroundColor: "#f0de3dff",
    borderRadius: 10,
    alignItems: "center",
    width: 500,
    height: 30,
    margin:10,
  }
})



export default Login;