import React from 'react'
import Monster from '../monster/Monster'

const MonsterList = (props) => {
    return props.monsters
          .map((monster, idx) => <Monster key={idx} monster={monster} id={idx} />);
};

export default MonsterList;