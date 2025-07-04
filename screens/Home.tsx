import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home({ navigation }: any) {
  return (
    
      <ImageBackground source={{uri:"https://png.pngtree.com/png-clipart/20221001/original/pngtree-welcome-text-png-image_8648505.png"}} style={styles.container}>
      <Text>Marco Rivera</Text>
      <Button title='Ir a Top Tab Navigator' onPress={() => navigation.navigate("MyTops")} />
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
    container:{
    flex:1,
  }
})