import {Text, View, Switch} from 'react-native';
import {styles} from './styles';
import {useContext} from 'react';
import {TemaContext} from '../../contexts/TemaContext';

export default function Profile({navigation}) {
  const {currentTheme, chosenTheme, saveThemeToDevice} =
    useContext(TemaContext);

  const estilo = styles(chosenTheme);

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Profile</Text>

      <View style={estilo.inputArea}>
        <Text style={estilo.subtitulo}>Tema: {currentTheme}</Text>
        <Switch
          onValueChange={() =>
            currentTheme === 'escuro'
              ? saveThemeToDevice('claro')
              : saveThemeToDevice('escuro')
          }
          value={currentTheme === 'escuro' ? true : false}
        />
      </View>
    </View>
  );
}
