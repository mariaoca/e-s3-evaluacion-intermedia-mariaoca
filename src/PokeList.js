import React, { Component } from 'react';
import './App.css';


class PokeList extends Component{
    
    render(){
        const {pokemon} = this.props;
        return(
            <div>
                <ul className="pokemon_list">
                    {pokemon.map((item, index) => {
                        return (
                            <li className="ItemList" key={index}>
                                <img src={item.url} />
                                <h2>{item.name}</h2>
                                <ul>
                                    {item.types.map((type,index)=>{
                                        return (
                                            <li className="typeList" key={index}>
                                                {type}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                </ul>

            </div>
        )
    }

}

export default PokeList;








