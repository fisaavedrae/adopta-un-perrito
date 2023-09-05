import React from 'react';

export default function Card({ urlImagen, nombre, descripcion, badge }) {
    return (
        <div className="card">
            <img className="fotoPerro" src={urlImagen} />
            <div className="nombre">{nombre}</div>
            <div className="descripcion">{descripcion}</div>
            <div className="badge">{badge}</div>
        </div>
    );
}

