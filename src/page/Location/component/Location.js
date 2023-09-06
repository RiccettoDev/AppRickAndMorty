import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function LocationItem({data}) {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.title}>Nome: {data.name}</Text>
        <Text style={styles.title}>Tipo: {data.type}</Text>
        <Text style={styles.title}>Dimenção: {data.dimension}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 8,
    width: 385,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 16,
    elevation: 6,
    flexDirection: 'row',
  },
  info: {
    justifyContent: 'center',
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
