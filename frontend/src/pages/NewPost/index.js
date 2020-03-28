import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';

export default function NewPost(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const likes = 0;

    const userID = localStorage.getItem('ID');

    const history = useHistory();
    
    async function handleNewPost(e){
        e.preventDefault();

        const data = {
            title,
            description,
            image,
            likes
        }

        try{
            await api.post('posts', data, {
                headers: {
                    Authorization: userID
                }
            })

            history.push('/profile');
        }catch(err){
            alert("Erro ao criar um novo post, tente novamente")
        }
    }

    return (
        <div className="new-post-container">
            <div className="content">
                <section>
                    <h1>Criar novo post</h1>
                    <p>Pense em algo divertido para mandar</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </section>

                <form onSubmit={handleNewPost}>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Titulo"/>
                    <textarea type="text" value={description} onChange={e => setDescription(e.target.value)}  placeholder="Descrição"/>
                    <input type="text" value={image} onChange={e => setImage(e.target.value)}  placeholder="Imagem"/>
                    <button className="button" type="submit">Criar postagem</button>
                </form>
            </div>
        </div>
    );
}