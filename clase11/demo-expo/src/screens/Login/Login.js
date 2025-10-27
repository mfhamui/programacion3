import  React, {Component}  from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { auth } from "../../firebase/config";



class Login extends Component {
  constructor(props) {
    super(props);
       this.state = {
        email: "",
      
        password:"",
        error:""
    }
  
  }
    onSubmit(email, password) {
        console.log(this.state);
        if ( !this.state.email.includes("@") ){
          this.setState({error: "formato de email no valido"})
          return
        }
        if (this.state.password.length < 6){
          this.setState({error: "La password debe tener una longitud mínima de 6 caracteres"})
          return
        }
        auth.signInWithEmailAndPassword(email, password)


    .then((response) => {
        console.log(response);
         this.props.navigation.navigate('Homemenu')

    })
    .catch(errores => {
       console.log(errores)
       
       this.setState({error: "Credenciales incorrectas"})
      })

       
     }
    render(){
    return(
        <View style= {StyleSheet.container}>
            <Text style={style.titulo}>Ingresar</Text>

             <TextInput  style={style.input}
                        keyboardType='email-address'
                        placeholder='email'
                        onChangeText={ text => this.setState({email:text}) }
                        value={this.state.email} />
                      
                      
                      
                    <TextInput style={style.input} 
                        keyboardType='default'
                        placeholder='password'
                        secureTextEntry={true} 
                        onChangeText={ text => this.setState({password:text}) }
                        value={this.state.password}/> 

                     <Text>{this.state.error}</Text> 
                    <Pressable style={style.boton} onPress={() => this.onSubmit(this.state.email, this.state.password)}>
                    <Text style={style.texto}> entra! </Text> 
                    </Pressable> 
            


        
             <Pressable style={style.botonAzul} 
             onPress={ ()=> this.props.navigation.navigate('Register')} >
                     <Text>Ir al Register </Text>
            </Pressable>
                 
          <Pressable style={style.botonAmarillo} onPress={ ()=> this.props.navigation.navigate('Homemenu')}>
                     <Text> entrar a la app </Text>
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


    botonAzul: {
    backgroundColor: "#7dc5f5",
    borderRadius: 4,
    alignItems: "center",
   paddingHorizontal:10,
    paddingVertical:6, 
    marginTop: 10,
   
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



export default Login;