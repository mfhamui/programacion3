import  React, {Component} from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { StyleSheet } from "react-native";


class Register extends Component {
    constructor(props) {
    super(props);
    this.state = {
        comentarios:""
    }}

  
  onSubmit() {
    console.log(this.state);
  }
    render(){
    return(
       <View style= {StyleSheet.container}>
         <Text style={style.titulo}>Dejanos tu comentario:</Text>
        
      
         <TextInput  style={style.input} 
            keyboardType='default'
            placeholder='comentarios'
            onChangeText={ text => this.setState({comentarios:text}) }
            value={this.state.userName} />
     
        <Pressable  style={style.boton} onPress={() => this.onSubmit()}>
        <Text style={style.texto}> enviar! </Text> 
        </Pressable> 


   
   
        
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
    fontSize: 15,
    marginBottom: 2,
  },

  input: {
    height:20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth:1,
    borderColor: "#ccc", 
    borderCurve: 6, 
    marginVertical: 10, 
    borderStyle: "solid"
  },

  boton: {
    backgroundColor: "#28a745",
    paddingHorizontal:10,
    paddingVertical:6, 
    textAlign: "center",
    alignItems: "center",
    borderRadius: 4, 
    borderWidth: 1, 
    borderStyle: "solid",
    borderColor: "#28a745"
  },
  texto : {color: "#fff",
},


 
})


export default Register;