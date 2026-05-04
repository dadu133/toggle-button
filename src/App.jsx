import { useState, useRef, useEffect, use } from 'react';
export default function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchpokemon, setSearchpokemon] = useState("");
  const fetchPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=130");
      const data = await response.json();
      const pokemondata = await Promise.all(data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return res.json();
      }));
      console.log(pokemondata[0].sprites.front_default);
      setPokemon(pokemondata);
    } catch (err) {
      console.error("Error fetching pokemon data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchPokemon();
  }, [])

  if (loading) {
    return <div>Loading .....</div>
  }
  if (error) {
    return <div>Error fetching pokemon data
      <h1>{error.message}</h1>
    </div>
  }
  console.log(pokemon);
  const filteredPokemon = pokemon.filter((p) => p.name.toLowerCase().includes(searchpokemon.toLowerCase()));
  return (
    <div>
      <h1 className='text-5xl text-center' style={{ margin: "1rem" }}>Let's catch pokemon</h1>
      <input 
        type='search' 
        placeholder="Search pokemon..." 
        style={{ margin: "1rem", padding: "0.5rem" }}
        value={searchpokemon}
        onChange={(e) => setSearchpokemon(e.target.value)}
      />
      <div className='flex gap-4 flex-wrap justify-center'>
        {filteredPokemon && filteredPokemon.map((pokemon) =>
          <div className='box-border w-96 p-4 border-7 border-gray-500 rounded-2xl' style={{ padding: "10px" }}>
            <h2 className='text-7xl'>{pokemon.name}</h2>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} style={{ height: "200px" }} />
            <p className='text-2xl border-amber-100 border-4 rounded-3xl'>{pokemon.types.map((curr) => curr.type.name).join(", ")}</p>
            <h3 className='text-2xl'>Abilities:</h3>
            <div className='grid grid-cols-3'>
              <span className='mx-2'>Height : {pokemon.height}</span>
              <span className='mx-2'>Weight : {pokemon.weight}</span>
              <span className='mx-2'>Speed : {pokemon.stats[5].base_stat}</span>
              <span className='mx-2'>Experience : {pokemon.base_experience}</span>
              <span className='mx-2'>Attack : {pokemon.stats[1].base_stat}</span>
             <span className='mx-2'>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).slice(0, 1).join(", ")}</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

