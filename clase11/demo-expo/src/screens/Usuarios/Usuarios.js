import  React, {Component}  from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { db } from '../../firebase/config'
import { FlatList } from "react-native-web";


class Usuarios extends Component {
    constructor(props) {
    super(props);
     this.state = {
       usuarios: [],
    }

}

componentDidMount() {
        db.collection('users').onSnapshot(docs => {
            let usuario = [];
            docs.forEach(doc => {
                usuario.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            this.setState({
                usuarios: usuario,
            });
        });
   
    
    }

    
    render(){
         console.log(this.state.usuarios);
    return(
        
            <View style= {StyleSheet.container}>
                  <Text style={style.titulo}>Usuarios</Text>

                <FlatList
                data= {this.state.usuarios}
                keyExtractor={item=> item.id.toString()}
                renderItem={({item})=> <Text>{item.data.email}</Text>}
                            
                /> 

                                    
                     <Pressable style={style.botonAmarillo} onPress={ ()=> this.props.navigation.navigate('Login')}>
                             <Text>Ir al Login </Text>
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
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },


    
  botonAmarillo: {
    backgroundColor: "#f0de3dff",
    borderRadius: 4,
    alignItems: "center",
    paddingHorizontal:10,
    paddingVertical:6, 
    marginTop:10,
  }
})



export default Usuarios;