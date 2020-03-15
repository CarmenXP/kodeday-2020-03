async function getAllCharacters(){
  const response = await fetch("https://rickandmortyapi.com/api/character/")
  const parsedjson= await response.json();
  return parsedjson.results
}
async function getACharactersById(id){
const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
const parsedjson = await response.json()
return parsedjson
}

export default{
  getAllCharacters,
  getACharactersById
}
