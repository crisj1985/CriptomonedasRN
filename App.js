import React,{useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View, Image, ActivityIndicator } from 'react-native'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion'
import axios from 'axios';

const App = () => {

      const [moneda, setMoneda] = useState('');
      const [criptomoneda, setCriptomoneda] = useState('');
      const [consultarAPI, setConsultarAPI] = useState(false);
      const [resultado, setResultado] = useState({});
      const [cargando, setCargando] = useState(false)

      useEffect(() => {
       const cotizarCriptomoneda = async () => {
           if (consultarAPI) {
             const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
             console.log(url);
             const resultado = await axios.get(url)
             setCargando(true)
             setTimeout(() => {
                setResultado(resultado.data.DISPLAY[criptomoneda][moneda])
                setConsultarAPI(false);
                setCargando(false);    
             }, 3000);
           }
        }
        cotizarCriptomoneda();
      }, [consultarAPI])

      const componente = cargando ? <ActivityIndicator size="large" color="#5e49e2"/> : <Cotizacion resultado={resultado} />

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
        <View style={{marginTop:40}}>{componente}</View>
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
