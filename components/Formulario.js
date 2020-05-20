
import React, {useState, useEffect}from  "react";
import {StyleSheet,Text, View} from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';


const Formulario  = () =>{

    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    
    useEffect(() => {
        const ConsultarApi = async () => {
                const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
                const resultado = await axios.get(url);

        }
    },[])

    const obtenerMoneda = (moneda) => {
    setMoneda(moneda);
}

return (
  <View>
    <Text style={styles.label}>Moneda</Text>
    <Picker
    onValueChange = { moneda => obtenerMoneda(moneda)}
    selectedValue = {moneda}
    >
      <Picker.Item label="-Seleccione-" value="" />
      <Picker.Item label="Dolar de USA" value="USD" />
      <Picker.Item label="Peso Mexicano" value="MXN" />
      <Picker.Item label="Euro" value="EUR" />
      <Picker.Item label="Libra Esterlina" value="GBP" />
    </Picker>
    <Text style={styles.label}>CriptoMoneda</Text>
  </View>
)
}

const styles = StyleSheet.create({
label:{
    fontFamily:'Lato-Black',
    textTransform:'uppercase',
    fontSize:22,
    marginVertical:20
}
});
export default Formulario


