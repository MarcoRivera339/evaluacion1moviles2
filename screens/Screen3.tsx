import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, remove, update } from 'firebase/database'
import { db } from '../firebase/Config'

export default function EditarScreen() {
  const [placa, setplaca] = useState("")
  const [marca, setmarca] = useState("")
  const [color, setcolor] = useState("")
  const [modelo, setmodelo] = useState("")

  function editar() {
    update(ref(db, 'autos/' + placa), {
      brand: marca,
      color: color,
      model: modelo
    });
    Alert.alert("El registro se ha editado")
    alert("El registro se ha editado")
  }

  function Eliminar() {
  if (window.confirm("¿Estás seguro de que deseas eliminar este auto?")) {
    remove(ref(db, 'autos/' + placa))
      .then(() => {
        alert("Auto eliminado exitosamente");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  }
}


  return (
    <View>
      <Text>Editar</Text>

      <TextInput
        placeholder='Ingresar placa'
        onChangeText={(texto) => setplaca(texto)}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar marca'
        onChangeText={(texto) => setmarca(texto)}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar color'
        onChangeText={(texto) => setcolor(texto)}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar modelo'
        onChangeText={(texto) => setmodelo(texto)}
        style={styles.input}
      />

      <Button title='Editar' onPress={() => editar()} />

      <Text>Eliminar</Text>
      <TextInput
        placeholder='Placa'
        onChangeText={(texto) => setplaca(texto)}
      />
      <Button title='Eliminar' color={'red'} onPress={() => Eliminar()} />

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