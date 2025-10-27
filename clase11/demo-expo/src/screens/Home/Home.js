import  React, {Component}  from "react";
import { Text, View } from "react-native-web";
import { StyleSheet } from "react-native";
import DynamicForm from "../../components/DynamicForm"


class Home extends Component {
    render(){
    return(
        <View style= {StyleSheet.container}>
            <Text style={style.titulo}>HOME</Text>
                
            <Text>Bienvenido!</Text>
             <DynamicForm/>
        
        </View>
        
    )}
}


const style= StyleSheet.create({
    container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    paddingHorizontal: 10,
    marginTop:20,
    }, 

      titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },

})

export default Home;