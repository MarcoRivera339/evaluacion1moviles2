
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';

type Juego = {
  titulo: string;
  plataforma: string[];
  genero: string[];
  desarrollador: string;
  precio: number;
  lanzamiento: string;
  descripcion: string;
  imagen: string;
};

export default function Screen4() {
  const [juegos, setJuegos] = useState<Juego[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function cargarJuegos() {
    try {
      const response = await fetch(
        'https://jritsqmet.github.io/web-api/series.json'
      );
      const json = await response.json();
      setJuegos(json.series);
    } catch (error) {
      console.error('Error al cargar API:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    cargarJuegos();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={juegos}
      keyExtractor={(item, index) => item.titulo + index}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image
            source={{ uri: item.imagen }}
            style={{ width: 80, height: 80, marginRight: 10 }}
          />
          <View>
            <Text>{item.titulo}</Text>
            <Text>Desarrollador: {item.desarrollador}</Text>
            <Text>Precio: ${item.precio}</Text>
          </View>
        </View>
      )}
    />
  );
}