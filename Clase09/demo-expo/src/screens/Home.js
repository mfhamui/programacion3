import  React  from "react";
import { Text, View } from "react-native-web";
import Boton from "../components/Boton/Boton";
import Contador from "../components/Contador/Contador";
import { StyleSheet } from "react-native";

function Home(params) {
    return(
        <View style={styles.principal}>
            <Text>Hola mundo</Text>
            <Boton/>
            <Contador/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    principal: {
        alignItems: "center",
        padding: 10,
        textAlign: "center"
    }
    
})

export default Home;