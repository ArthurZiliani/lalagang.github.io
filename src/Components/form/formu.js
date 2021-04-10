
import React, { useState } from "react";
import "./style.css"


import api from "../../api"





const Formulario = () => {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [senha, setSenha] = useState('');
    const [discord, setDiscord] = useState('');
    const [familia, setFamilia] = useState('');

    async function handleSubmit() {

        const data = {
            nome_usuario: nome,
            idade: idade,
            senha: senha,
            discord: discord,
            familia: familia,
        }

        const response = await api.post('/api/usuarios', data);

        if (response.status === 200) {
            window.location.href = '/admin/usuarios'
        } else {
            alert('Erro ao cadastrar o usuário!');
        }
    }

    return (
        <div>

            <h1> Formulário para entrar na Família</h1>

            <form method="POST" >
                <div className="form-group">
                    <label htmlFor="title">NOME</label>
                    <input required
                        id="nome"
                        name="nome"
                        label="Nome completo"
                        fullWidth
                        autoComplete="nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="title">IDADE</label>
                    <input required
                        id="idade"
                        name="idade"
                        label="Nome completo"
                        fullWidth
                        autoComplete="idade"
                        value={idade}
                        onChange={e => setIdade(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Porque quer entrar na WhiteBears?</label>
                    <input required
                        id="senha"
                        name="senha"
                        label="senha"
                        fullWidth
                        autoComplete="senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Discord</label>
                    <input required
                        id="discord"
                        name="discord"
                        label="Nome completo"
                        fullWidth
                        autoComplete="discord"
                        value={discord}
                        onChange={e => setDiscord(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Quem Indicou?</label>
                    <input required
                        id="familia"
                        name="familia"
                        label="Nome completo"
                        fullWidth
                        autoComplete="familia"
                        value={familia}
                        onChange={e => setFamilia(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Já foi de alguma Família?</label>
                    <input id="familia" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Ta disposto a Cumprir as metas da sua área?</label>
                    <input id="meta" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Em qual horário está disponível?</label>
                    <input id="hora" type="time" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Você pode contribuir com algo para WhiteBears relacionado <p></p>a networking e troca de conhecimento?
                   </label>
                    <input id="resposta" required></input>
                    <button className="form-button" onClick={handleSubmit}>Enviar</button>
                </div>



            </form>


        </div>
    );
};

export default Formulario;