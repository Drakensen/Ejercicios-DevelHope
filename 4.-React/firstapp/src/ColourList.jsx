import React from 'react';
import Colours from './Colours';
import Colour from './Colour'

const ColourList = ({ colours }) => (
    <ul>
        {colours.map(colour => (
            <Colour key={colour.id} colour={colour} />
    ))}
    </ul>
);

export default ColourList;