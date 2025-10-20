import React, {Component} from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native-web";

class Boton extends Component {
    saludar (){
        console.log("Me clickearon")
    }
    render ( ) {
        return(
            
            <Pressable onPress={()=> this.saludar()} style={styles.boton} >
                <Text style={styles.texto}>Clickeame</Text>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: "#ccc",
        padding: 4,
        borderRadius: 4,
        marginBottom: 10
    },
    texto: {
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default Boton;