import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Pressable } from "react-native-web";

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
          contador: 0
        };
      }
    click (){
        this.setState(
            {
                contador: this.state.contador + 1
            }
        )
    }
    render(){
        return(
            <View>
                <Text style={styles.textoDos}>Cantidad de clicks: {this.state.contador}  </Text>
                <Pressable onPress={()=> this.click()} style={styles.boton}>
                    <Text style={styles.texto}>Click aquí para contar </Text>
                </Pressable>
            </View>
            
        )
    }
    
}
const styles = StyleSheet.create({
    boton: {
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        padding: 7,
        borderRadius: 4,
        marginBottom: 10
    },
    texto: {
        fontWeight: "bold",
        textAlign: "center"
    },
    textoDos: {
        textAlign:"center"
    }
})
export default Contador;