import  React, {Component}  from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import DynamicForm from "../../components/DynamicForm"
import {  db} from "../../firebase/config";
import Post from "../../components/Post";


class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };}

  componentDidMount(){
      db.collection('posts').onSnapshot(docs => {
                let posteos = [];
                docs.forEach(doc => {
                    posteos.push({
                        id: doc.id,
                        data: doc.data()
                    });
                });
                this.setState({
                    posts: posteos,
                });
            });
  }

    render(){
    return(
        <View style= {StyleSheet.container}>
           <Text style={style.titulo}>HOME</Text>
                
            <Text>Bienvenido!</Text>
             <DynamicForm/>

             <FlatList     
             data={this.state.posts}
          keyExtractor={item=> item.id.toString()}
          renderItem={({ item }) => (
            <Post
              email={item.data.email}
              mensaje={item.data.mensaje}
              createdAt={item.data.createdAt}
              />
         
          )} />
        
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