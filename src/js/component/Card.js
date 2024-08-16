import React from "react";


//Aqui en este componente creo todos los atributo que quiero que tenga la carta como: imagen, titulo, texto, boton ect.
//Creo una sola carta. es el modelo base de todas las cartas. es como el modelo base, despues en el Home hago la cantidad de carta que quiero que se visualize. 

const Card = (props) => {
    console.log(props.imagen)
    console.log(props.title)
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.descripcion}</p>

                </div>
                <div className="card-footer">
                    <a href={props.link} className="btn btn-primary">Find out more!</a>
                </div>

            </div>

        </div>


    );
};

export default Card;