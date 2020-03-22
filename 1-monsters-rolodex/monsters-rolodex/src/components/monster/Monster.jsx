import React from 'react'

const getMonsterImage = (id) => 'https://robohash.org/' + id + '?set=set2&size=180x180';

const Monster = (props) => {
   return (
      <div>
         <img src={getMonsterImage(props.id)} alt=""/>
         <h2>{props.monster.name}</h2>
      </div>
   );
}

export default Monster