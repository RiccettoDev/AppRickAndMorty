import React, {useContext, useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {ThemeContext} from '../../contexts/ThemeContext';

import api from '../../services/Api';
import CharacterItem from './component/Character';

export default function Character() {
  const {chosenTheme} = useContext(ThemeContext);
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);

  const styled = styles(chosenTheme);

  const changePage = () => {
    setPage(page + 1);
    loadData();
    console.log(page);
  };

  const backPage = () => {
    setPage(page - 1);
    loadData();
    console.log(page);
  };

  const loadData = () => {
    api.get(`/character?page=${page}`).then(response => {
      setCharacter(response.data.results);
    });
  };

  useEffect(() => {
    api.get(`/character?page=${page}`).then(response => {
      setCharacter(response.data.results);
    });
  }, []);

  return (
    <View style={styled.container}>
      <FlatList
        data={character}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CharacterItem data={item} />}
      />
      <View style={styled.containerButton}>
        <TouchableOpacity style={styled.button} onPress={backPage}>
          <Text style={styled.titleButton}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styled.button} onPress={changePage}>
          <Text style={styled.titleButton}>Proximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
