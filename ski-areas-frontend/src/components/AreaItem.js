import React, { useState } from 'react';
import AreaForm from './AreaForm';

export default function AreaItem({id, name, description, logo, vertical, epic, ikon, other, deleteArea, updateArea }) {
    
    const area = { id, name, description, logo, vertical, epic, ikon, other }
    // ^^^in this case, tying props back together after destructuring
    // because it is easer to send them to the edit form
    const [isToggled, setIsToggled] = useState(false)
    const handleClick = (event) => deleteArea(id)
    const handleToggle = (event) => setIsToggled(!isToggled)
    const areaCard = () => (
        <li className="area-item">
        <img src={logo} />
        {/* {name} */}
        <h3>{description}</h3>
        <p>{vertical} ft vertical</p>
        <p>{epic}</p>
        <p>{ikon}</p>
        <p>{other}</p>
        <button onClick={handleClick} className="delete-button">DELETE</button>
        <button onClick={handleToggle} className="edit-button">EDIT</button>
    </li>
    )
    
    return isToggled 
        ? <AreaForm 
            handleToggle={handleToggle} 
            submitAction={updateArea} 
            area={area} /> 
        : areaCard()
}