import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export default function Home() {
  return (
    <View style={styles.conatiner}>
      <View>
        <Text style={styles.title}>Pagina de Profile</Text>
      </View>
    </View>
  );
}
