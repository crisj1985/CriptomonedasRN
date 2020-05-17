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

const App = () => {
  return (
    <>
      <Header/>
      <Image source={require("./assets/img/cryptomonedas.png")} style={styles.image}/>
    </>
  );
};

const styles = StyleSheet.create({
  image:{
    width:"100%",
    height:140,
    marginHorizontal:"2.5%"
  }
});

export default App;
