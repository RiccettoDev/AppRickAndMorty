import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function CharacterItem({data}) {
  return (
    <View style={styles.card}>
      <View style={styles.imageCard}>
        <Image
          style={{width: 100, height: 100, borderRadius: 16}}
          source={{uri: data.image}}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>Nome: {data.name}</Text>
        <Text style={styles.title}>Espécie: {data.species}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 8,
    width: 350,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 16,
    elevation: 6,
    flexDirection: 'row',
  },
  imageCard: {
    width: 105,
    height: 105,
    borderRadius: 16,
    elevation: 6,
  },
  info: {
    justifyContent: 'center',
    marginLeft: 16,
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 'bold',
    color: '#000',
  },
});
