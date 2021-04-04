/* eslint-disable no-unused-vars */
import React from "react";
import Fundo from "../image/fundo.png"
import Title from "../image/titulo.png"

const home = () => {
    return (
        <div className="container-home">
            <div className="title-lala">
                <h1>Título</h1>

            </div>



            <div className="fundo-home">
                <img src={Fundo} alt="" />

            </div>
        </div>
    );
};

export default home;