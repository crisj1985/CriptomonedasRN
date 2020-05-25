
import React, {useState, useEffect}from  "react";
import {StyleSheet,Text, View, TouchableHighlight, Alert} from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';


const Formulario = ({ moneda, criptomoneda, setMoneda, setCriptomoneda, setConsultarAPI }) => {
  const [criptomonedas, setCriptomonedas] = useState([])

  useEffect(() => {
    const ConsultarApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
      const resultado = await axios.get(url)
      console.log(resultado)

      setCriptomonedas(resultado.data.Data)
    }
    ConsultarApi()
  }, [])

  const obtenerMoneda = (moneda) => {
    setMoneda(moneda)
  }
  const obtenerCriptomoneda = (cripto) => {
    setCriptomoneda(cripto)
  }
  const cotizarPrecio = () => {
    if (moneda === '' || criptomoneda === '') {
      mostrarAlert()
      return
    }
    setConsultarAPI(true);
  }
  const mostrarAlert = () => {
    Alert.alert('Error...', 'Ambos campos son obligatorios', [{ text: 'OK' }])
  }

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker onValueChange={(moneda) => obtenerMoneda(moneda)} selectedValue={moneda} itemStyle={{ height: 120 }}>
        <Picker.Item label="-Seleccione-" value="" />
        <Picker.Item label="Dolar de USA" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>CriptoMoneda</Text>
      <Picker
        onValueChange={(cripto) => obtenerCriptomoneda(cripto)}
        selectedValue={criptomoneda}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label="-Seleccione-" value="" />
        {criptomonedas.map((cripto) => (
          <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
        ))}
      </Picker>
      <TouchableHighlight style={styles.btnCotizar} onPress={() => cotizarPrecio()}>
        <Text style={styles.texttoCotizar}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
label:{
    fontFamily:'Lato-Black',
    textTransform:'uppercase',
    fontSize:22,
    marginVertical:20
},
btnCotizar:{
backgroundColor:"#5E49E2",
padding:10,
marginTop:20
},
texttoCotizar:{
  color:"#FFF",
  fontSize:18,
  fontFamily:'Lato-Black',
  textTransform:'uppercase',
  textAlign:'center'
}

});
export default Formulario


