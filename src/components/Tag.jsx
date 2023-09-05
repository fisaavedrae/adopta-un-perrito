import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

export default function Tag({ texto, color }) {
    return (
        <Badge bg={color}>{texto}</Badge>  /* Uso del componente Badge de Boostrap */
    );
}
