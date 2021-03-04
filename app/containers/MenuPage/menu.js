import React from 'react';
import Starters from './starters';
import Dish from './dish';
import Desserts from './desserts';

function MenuTable () {
    return (
        <div>
            <Starters />
            <Dish />
            <Desserts />
        </div>
    )
}

export default MenuTable;
