import React from 'react'

export default function AreaItem({name, description, logo, vertical, epic, ikon, other}) {
    return (
        <li className="area-item">
            <h2>{name}</h2>
            <h3>{description}</h3>
            <img src={logo} />
            <p>{vertical} ft vertical</p>
            <p>{epic}</p>
            <p>{ikon}</p>
            <p>{other}</p>

        </li>
    )
}