import React from 'react'
import './Monster.css'
const getMonsterImage = (id) => 'https://robohash.org/' + id + '?set=set2&size=180x180';

const Monster = (props) => {
   return (
      <div className="monster">
         <img src={getMonsterImage(props.id)} alt=""/>
         <h2>{props.monster.name}</h2>
         <p>{props.monster.email}</p>
      </div>
   );
}

export default Monster