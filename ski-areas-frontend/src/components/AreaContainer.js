import React from 'react';
import AreaItem from './AreaItem';

export default function AreaContainer({areas}) {

    //destructuring gives you a varible that has the value of props.areas inside of it
    const showAreas = () => {
        return areas.map (area => <AreaItem key={area.id} {...area}/>)
        // {...area} gives a prop for every key:value pair inside the area object
        // key is for react to keep up with components when you're reusing them
        // over and over again. It isn't used as a prop -- it's just for the
        // virtual DOM to keep up with those components.
    }

    return (
        <ul className="area-list">
            {showAreas()}

        </ul>
    )
}
