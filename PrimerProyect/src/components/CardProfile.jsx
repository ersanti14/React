import React from "react";

const person = {
    nombre: 'Daniela',
    apellidos: 'Marquez',
    imagenUrl: 'https://unavatar.io/ersanti14',
    dim: 90,
    telefono: 31178301436
}

const CardProfile = () => {
    return (
        
        <div className="text-center bg-lime-700">
            <h1 className="text-3xl font-bold underline">{ person.nombre} {person.apellidos}</h1>
            <img className="rounder-full mx-auto" src={person.imagenUrl} width={person.dim} height={person.dim} alt="" />
            <p className="text-center">{person.telefono}</p>
        </div>
    );
}

export default CardProfile