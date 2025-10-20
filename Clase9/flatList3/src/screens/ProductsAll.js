import React, { Component } from "react";
import Card from "../components/Card/Card";
import { StyleSheet, FlatList } from "react-native";

class ProductsAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    };

    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    info: data.results,
                })
            )
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <FlatList style={styles.flatlist}
                data={this.state.info}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Card
                    name={item.name}
                    species={item.species}
                    gender={item.gender}
                    image={item.image}
                />}
            />
        )
    }
}
const styles = StyleSheet.create({
    flatlist: {
        width: '100%',
        flex: 1
    },
})

export default ProductsAll;