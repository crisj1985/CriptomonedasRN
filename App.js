import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import Header from './components/Header'
import Formulario from './components/Formulario'

const App = () => {
  return (
    <>
      <Header />

      <Image source={require('./assets/img/cryptomonedas.png')} style={styles.image} />

      <View style = {styles.contenido}>
        <Formulario />
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 140,
    marginHorizontal: '2.5%',
  },
  contenido:{
    marginHorizontal:'2.5%'
  }
})

export default App;
