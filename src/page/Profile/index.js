import {Text, View, Switch} from 'react-native';
import {styles} from './styles';
import {useContext} from 'react';
import {TemaContext} from '../../contexts/TemaContext';

export default function Profile({navigation}) {
  const {temaAtual, temaEscolhido, salvarTemaNoDispositivo} =
    useContext(TemaContext);

  const estilo = styles(temaEscolhido);

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Profile</Text>

      <View style={estilo.inputArea}>
        <Text style={estilo.subtitulo}>Tema: {temaAtual}</Text>
        <Switch
          onValueChange={() =>
            temaAtual === 'escuro'
              ? salvarTemaNoDispositivo('claro')
              : salvarTemaNoDispositivo('escuro')
          }
          value={temaAtual === 'escuro' ? true : false}
        />
      </View>
    </View>
  );
}