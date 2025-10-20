import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Products from './src/screens/Products/Products';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Probando FlatLists</Text>
      <Products/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontWeight: "bold",
    fontSize: 20,
    color: "red"
  },
});
