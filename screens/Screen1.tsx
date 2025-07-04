import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, set } from 'firebase/database'
import { db } from '../firebase/Config'

export default function Screen1() {
  const [placa, setplaca] = useState("")
  const [marca, setmarca] = useState("")
  const [modelo, setmodelo] = useState("")
  const [color, setcolor] = useState("")

  function guardar() {
    set(ref(db, 'autos/' + placa), {
      brand: marca,
      model: modelo,
      color: color
    })

      Alert.alert("Auto registrado exitosamente")
      alert("Auto registrado exitosamente")

      setplaca('')
      setmarca('')
      setmodelo('')
      setcolor('')
  }

  return (
    <View>
      <Text>Agregar Autos</Text>

      <TextInput
        placeholder='Ingresar placa'
        onChangeText={setplaca}
        value={placa}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar marca'
        onChangeText={setmarca}
        value={marca}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar modelo'
        onChangeText={setmodelo}
        value={modelo}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar color'
        onChangeText={setcolor}
        value={color}
        style={styles.input}
      />

      <Button title='Guardar' onPress={guardar} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 25,
    backgroundColor: '#9999',
    margin: 6,
    width: "80%",
  },
})
