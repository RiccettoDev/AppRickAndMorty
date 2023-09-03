import {Text, View, Switch} from 'react-native';
import {styles} from './styles';
import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

export default function Home({navigation}) {
  const {chosenTheme} = useContext(ThemeContext);

  const styled = styles(chosenTheme);

  return (
    <View style={styled.container}>
      <Text style={styled.title}>Home</Text>
    </View>
  );
}
