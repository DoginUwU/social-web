import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';

export default function Register(){
    const [first_name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            first_name,
            last_name,
            email,
            image,
            nickname,
            password
        };

        try{
            const response = await api.post('users', data);

            alert(`ID criado: ${response.data.id}`);

            history.push('/');
        }catch(err){
            alert(`Erro ao se cadastrar, tente novamente mais tarde`);
            history.push('/');
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Bem vindo, obrigado por querer se juntar a nós.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Fazer login
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input type="text" value={first_name} onChange={e => setName(e.target.value)} placeholder="Primeiro Nome"/>
                    <input type="text" value={last_name} onChange={e => setLastName(e.target.value)} placeholder="Segundo Nome"/>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                    <input type="text" value={image} onChange={e => setImage(e.target.value)} placeholder="Imagem"/>
                    <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} placeholder="NickName"/>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha"/>

                    <button className="button" type="submit">Criar Conta</button>
                </form>
            </div>
        </div>
    );
}