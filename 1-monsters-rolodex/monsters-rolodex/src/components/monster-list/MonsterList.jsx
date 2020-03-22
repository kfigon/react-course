import React from 'react'
import Monster from '../monster/Monster'
import './MonsterList.css';

const MonsterList = (props) => {
    return (
        <div className="monster-list">
        {props.monsters
            .map((monster, idx) => <Monster key={idx} monster={monster} id={idx} />)        }
    </div>
    );
};

export default MonsterList;