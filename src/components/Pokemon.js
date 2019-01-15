import React, { Component } from 'react';


class Pokemon extends Component {

    render() {
        const {name,url,types } = this.props
        return (
            <div className="pokeCard">
                <div className="pokeImg">
                    <img src={url} alt={name} />
                </div>    
                    <h2>{name}</h2>
                    <ul>
                        {types.map((type, index) => {
                            return (
                                <li className="typeList" key={index}>
                                    {type}
                                </li>
                            )
                        })}
                    </ul>
                

            </div>
        )
}
}

export default Pokemon;
