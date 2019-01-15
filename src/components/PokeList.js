import React, { Component } from 'react';
import Pokemon from './Pokemon';



class PokeList extends Component{
    
    render(){
        const {pokemon} = this.props;
        return(
            <div className="container">
                <ul className="pokemon_list">
                    {pokemon.map((item) => {
                        return (
                            <li className="ItemList" key={item.id}>
                                <Pokemon name={item.name} url={item.url} types={item.types} />  
                            </li>
                        );
                    })}
                </ul>

            </div>
        )
    }

}

export default PokeList;








