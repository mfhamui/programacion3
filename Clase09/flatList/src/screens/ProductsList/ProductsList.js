import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { FlatList, View, Text } from "react-native";


class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [
                {
                    id: 1,
                    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                },
                {
                    id: 2,
                    title: "Mens Casual Premium Slim Fit T-Shirts",
                },
                {
                    id: 3,
                    title: "Mens Cotton Jacket",
                },
                {
                    id: 4,
                    title: "Mens Casual Slim Fit",
                },
                {
                    id: 5,
                    title: "White Gold Plated Princess",
                },
                {
                    id: 7,
                    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                },
                {
                    id: 8,
                    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
                },
                {
                    id: 9,
                    title: "Solid Gold Petite Micropave",
                },
                {
                    id: 10,
                    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
                },]
        }
    };
    render() {
        return (
            <View >
                <Text style={styles.texto} >Lista de productos</Text>
                <FlatList data={this.state.info}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Text>{item.title}</Text>}
                    style={styles.flatlist}
                />
            </View>


        )
    }
}
const styles = StyleSheet.create({
    flatlist: {
        width: '100%',
        flex: 1
    },
    texto: {
        fontWeight: "bold"
    }
})

export default ProductsList;