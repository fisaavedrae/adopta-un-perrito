import React from 'react';
import Tag from './Tag';


export default function Card({ urlImagen, nombre, descripcion, badge, colorBadge }) {
    return (
        <div className="card">
            <img className="fotoPerro" src={urlImagen} />
            <div className="nombre">{nombre}</div>
            <div className="descripcion">{descripcion}</div>
            <Tag texto={badge} color={colorBadge} />
        </div>
    );
}

