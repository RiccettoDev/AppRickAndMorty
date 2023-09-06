import {Text, View, Switch} from 'react-native';
import {styles} from './styles';
import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

export default function Profile({navigation}) {
  const {currentTheme, chosenTheme, saveThemeToDevice} =
    useContext(ThemeContext);

  const styled = styles(chosenTheme);

  return (
    <View style={styled.container}>
      <Text style={styled.title}>Perfil</Text>

      <View style={styled.inputArea}>
        <Text style={styled.subtitle}>Tema: {currentTheme}</Text>
        <Switch
          onValueChange={() =>
            currentTheme === 'dark'
              ? saveThemeToDevice('ligth')
              : saveThemeToDevice('dark')
          }
          value={currentTheme === 'dark' ? true : false}
        />
      </View>
    </View>
  );
}
