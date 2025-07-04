import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/Config';

export default function Screen2() {
  const [datos, setdatos] = useState([])
  const [placa, setplaca] = useState("")

  function leer() {
    const starCountRef = ref(db, 'autos/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      //transformar estructura
      let arreglo: any = Object.keys(data).map(placa => ({
        placa, ...data[placa]
      }))

      setdatos(arreglo)

      // console.log(data);
    });

  }

  function leer2() {
    const starCountRef = ref(db, 'autos/' + placa);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data.product != null) { } //ooojj
      Alert.alert(data.brand, "Datos del auto" + data.brand)
      alert(data.brand)

    });

  }

  useEffect(() => {
    leer()
    //console.log(datos);
  }, [])

  type Auto = {
    placa: String,
    brand: String,
    color: String,
    model: String

  }

  return (
    <View>
      <Text>Datos del Vehiculo por Placa</Text>
      <TextInput
        placeholder='placa'
        onChangeText={setplaca}
      />
      <Button title='buscar' onPress={leer2} />

      <FlatList
        data={datos}
        renderItem={({ item }: { item: Auto }) =>
          <View>
            <Text>{item.brand}</Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})