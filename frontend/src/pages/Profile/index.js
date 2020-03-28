import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiHeart, FiDelete } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';

export default function Profile(){
    const [posts, setPost] = useState([]);

    const userID = localStorage.getItem('ID');
    const userName = localStorage.getItem('first_name');
    const imgLink = localStorage.getItem('imgLink');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userID
            }
        }).then(reponse => {
            setPost(reponse.data);
        })
    }, [userID]);

    async function handleDeletePost(id){
        try{
            await api.delete(`posts/${id}`, {
                headers: {
                    Authorization: userID
                }
            });

            setPost(posts.filter(post => post.id !== id));
        }catch(err){
            alert('Desculpe, não foi possivel deletar seu post!');
            console.log(err);
        }
    }

    function handleLogout(){
        localStorage.clear();
        
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <span>Olá, {userName} </span>
                <img src={imgLink} alt=""/>
                <Link className="button" to="posts/new">Criar novo post</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Suas Postagens</h1>

            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <p className="title">{post.title}</p>
                        <p className="description">{post.description}</p>
                        <img className="imager" src={post.image} alt=""/>
                        <p className="sender">Enviado por: {post.user_id}</p>

                        <button type="button">
                            <FiHeart size={20} color="#a8a8b3" />
                            <p>{post.likes}</p>
                        </button>
                        <button onClick={() => handleDeletePost(post.id)} type="button" className="delete">
                            <FiDelete size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}