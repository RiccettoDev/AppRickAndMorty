import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
import {GlobalContext} from '../../contexts/GlobalContext';

import imageHome from '../../assets/imageHome.png';
import portal from '../../assets/portal-rick-and-morty.gif';

export default function Home({navigation}) {
  const {chosenTheme} = useContext(ThemeContext);
  const {name} = useContext(GlobalContext);

  const styled = styles(chosenTheme);

  return (
    <View style={styled.container}>
      <Image
        source={portal}
        style={{
          width: '200%',
          height: '100%',
          position: 'relative',
          opacity: 0.3,
        }}
      />
      <View style={styled.containerInfo}>
        <Text style={styled.title}>Olá {name}!</Text>
        <Image source={imageHome} style={styled.image} />
      </View>
      <View style={styled.containerInfoData}>
        <View style={styled.containerInfoBottom}>
          <Text style={styled.titleBig}>Bem vindo ao App</Text>
          <Text style={styled.titleBig}>Rick and Morty</Text>
          <View style={styled.containerInfoTop}>
            <Text style={styled.subtitle}>
              Uma aplicação mobile integrada à
            </Text>
            <Text style={styled.subtitle}>api de Rick and Morty</Text>
            <Text style={styled.subtitleBottom}>@BY EDUARDO RICCETTO</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
