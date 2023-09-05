import api from '../Api';

export async function searchCharacter() {
  try {
    const result = await api.get('/character');
    console.log('================');
    console.log(result.data.results);
    return result.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}
