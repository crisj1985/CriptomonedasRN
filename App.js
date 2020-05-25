import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion'
import axios from 'axios';

const App = () => {

      const [moneda, setMoneda] = useState('');
      const [criptomoneda, setCriptomoneda] = useState('');
      const [consultarAPI, setConsultarAPI] = useState(false);
      const [resultado, setResultado] = useState({});

      useEffect(() => {
       const cotizarCriptomoneda = async () => {
           if (consultarAPI) {
             const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
             console.log(url);
             const resultado = await axios.get(url)
             setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
             setConsultarAPI(false);
           }
        }
        cotizarCriptomoneda();
      }, [consultarAPI])

  return (
    <>
      <ScrollView>
        <Header />

        <Image source={require('./assets/img/cryptomonedas.png')} style={styles.image} />

        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            criptomoneda={criptomoneda}
            setMoneda={setMoneda}
            setCriptomoneda={setCriptomoneda}
            setConsultarAPI={setConsultarAPI}
          />
        </View>
        <Cotizacion resultado={resultado} />
      </ScrollView>
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
