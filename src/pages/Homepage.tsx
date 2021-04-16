import { url } from 'node:inspector';
import React, {useState, useEffect, FormEvent} from 'react';
import { pokemonData } from '../data/pokemonData';

const HomePage: React.FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>(pokemonData);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(()=> {
        const foundPoke = pokemonData.filter((pk)=> {
            return pk.name.toLowerCase().includes(searchTerm.toLowerCase());
        })

        searchTerm === '' ? setPokemon(pokemonData):setPokemon(foundPoke);
    });

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
    //   console.log(event.currentTarget.value);
      setSearchTerm(event.currentTarget.value);
    }

    return <div id='home'>
        <div className="row my-3">
            <div className="col text-center">
                <h2>Welcome to the Pokedex!</h2>
                <h4 className="text-secondary">The Worlds COolest Pokemon's Database!</h4>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <form action="">
                    <div className="input-group">
                        <input 
                        type="text" 
                        className="form-control"
                        placeholder='Search Pokemon by Name...'
                        value={searchTerm}
                        onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <ul className="list-group">
                    {pokemon.map((poke, index)=> {
                        return (
                            <li className="list-group-item" key={index}>
                                {poke.name}
                                <img src={poke.img} alt={poke.name}/>
                            </li>
                        )
                        
                    })}
                </ul>
                
            </div>
        </div>
        
    </div>;  
};

export default HomePage;
// const HomePage: React.FC = () => {

//     const [pokemon, setPokemon] = useState<Pokemon[]>(pokemonData);

//     const [searchTerm, setSearchTerm] = useState<string>('');
    
//     useEffect(() => {

//         const foundPokemon = pokemon.filter(mon => {
//             return (
//                 mon.name.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//         });

//         searchTerm === '' ? setPokemon(pokemonData) : setPokemon(foundPokemon);
//     }, [searchTerm]);



//     return (
//     <div id="dashboard">

//         <div className="row text-center mt-3">
//             <div className="col">
//                 <h2>Dashboard</h2>
//             </div>
//         </div>

//         <div className="row d-flex">
//             <div className="col text-center">
//                 <div className="content">

//                     <input
//                         type="text"
//                         className="form-control"
//                         id="pokemon-search"
//                         placeholder="Search for a Pokemon"
//                         value={searchTerm}
//                         onChange={handleChange}
//                     />
//                 </div>
//             </div>
//         </div>

//         <div className="row mt-3">
//             {pokemon.map(mon => {
//                 return (
                        
                //   <div className="card mb-3" style={{minWidth: "540px"}} key={poke.id}>
                //       <div className="row no-gutters">
                //           <div className="col-md-4 d-flex align-items-center justify-content-center">
                //               <img src={poke.img} alt={poke.name}/>
                //           </div>
//                           <div className="col-md-8">
//                               <div className="card-body">
//                                   <h5 className="card-title">{mon.name}</h5>
//                                   <p className="card-text">
//                                     <span className="font-weight-bold">Type: </span>
//                                     {mon.type.map((t, i) => {
//                                       return (
//                                         <div>{t}{i === mon.type.length - 1 ? '': ', '}</div>
//                                       );
//                                     })}
//                                     <span className="font-weight-bold">Weaknesses: </span>
//                                     {mon.weaknesses.map( (w, i) => {
//                                       return (
//                                         <div>{w}{i === mon.weaknesses.length - 1 ? '': ', '}</div>
//                                       );
//                                     })}
//                                   </p>
//                                   <p className="card-text">
//                                     <small className="text-muted">
//                                     <Link to={`/pokemon/${mon.id}`} className="card-link">View Details</Link>
//                                     </small>
//                                   </p>
//                               </div>
//                           </div>
//                       </div>
//                   </div>

//                 );
//             })}
//         </div>

//     </div>
//     );

// }

// export default HomePage;