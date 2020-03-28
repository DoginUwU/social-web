import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

// import img from '../../assets/bg.jpg';

export default function Login(){
    const [id, setID] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });

            localStorage.setItem('ID', id);
            localStorage.setItem('first_name', response.data.first_name);
            localStorage.setItem('imgLink', response.data.image);
            history.push('/profile');
        }catch(err){
            alert(`Erro ao fazer login, tente novamente`);
            history.push('/');
        }
    }

    return(
        <div className="login-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setID(e.target.value)} type="text" id="id"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Criar cadastro
                    </Link>
                </form>
            </section>
        </div>    
    );
}