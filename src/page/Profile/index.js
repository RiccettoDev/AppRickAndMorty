import {Text, View, Switch} from 'react-native';
import {styles} from './styles';
import {useContext} from 'react';
import {TemaContext} from '../../contexts/TemaContext';

export default function Profile({navigation}) {
  const {currentTheme, chosenTheme, saveThemeToDevice} =
    useContext(TemaContext);

  const styled = styles(chosenTheme);

  return (
    <View style={styled.container}>
      <Text style={styled.title}>Profile</Text>

      <View style={styled.inputArea}>
        <Text style={styled.subtitle}>Tema: {currentTheme}</Text>
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
