import { useState, useRef, useEffect, use } from 'react';
export default function App() {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/squirtle").then(res => res.json()).then(data => setPokemon(data)).catch(err => console.log(err))
  },[])
  if (!pokemon) {
    return <div>Loading .....</div>
  }
  return (
    <div className=' flex-col box-border h-96 w-96 p-4 border-7 border-gray-500 flex justify-center rounded-2xl' style={{padding:"10px"}}>
      {pokemon && (
        <div>
          <h2 className='  text-7xl'>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ height: "200px" }} />
        </div>
      )}
      <div>
        <h3 className='text-2xl'>Abilities:</h3>
        {pokemon.abilities.map((ability) => (
          <p key={ability.ability.name} className='text-lg'>{ability.ability.name}</p>
        ))}
      </div>
    </div>
  );
}

