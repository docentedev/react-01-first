import React from 'react';
import './Card.css';

/**
 * Componente presentacional de tipo funcional para desplegar un card
 * 
 * @author Claudio Rojas <claudio.dcv(a)gmail.com>
 * @version 1.0.0 
 * @param {object} props - contenedor de propiedades del componente
 * @param {string} props.title - titlo del card
 * @param {string} props.footer - propiedad tipo string para mostrar en pie de card
 * @param {JSX.Element} props.children - contenido JXS de un card
 * @returns {JSX.Element}
 */
const Card = ({ title, footer, children }) => (
    <div className="card">
        <div className="card__header">{title}</div>
        <div className="card__content">{children}</div>
        <div className="card__footer">{footer}</div>
    </div>
);

export default Card;