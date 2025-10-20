import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Card(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.name}</Text>
            <Text>Species: {props.species}</Text>
            <Text>Gender: {props.gender}</Text>
            <Image style={styles.image} 
              source={{uri: props.image}}
              resizeMode='contain'/>
        </View>
    
    )
}
const styles= StyleSheet.create({
    image: {
        height: 100,
        width: 200,
        marginTop: 10,
        alignSelf: "center"
      },
      card: {
        backgroundColor: "#ccc",
        borderRadius: 4,
        padding: 14,
        margin: 10
      },
      title: {
        fontWeight: "bold",
        alignSelf: "center",
      }
})
export default Card;