import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

import api from '../../services/api';

// <Image source="" />

import styles from './styles';

export default function Posts(){
    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    function navigateToDetail(post){
        navigation.navigate('Detalhes', { post });
    }

    async function loadPosts(){
        if(loading) return;

        if(total > 0 && posts.length == total) return;

        setLoading(true);

        const reponse = await api.get('posts', {
            params: {
                page
            }
        });

        setPosts([ ... posts, ... reponse.data]);
        setTotal(reponse.headers['x-total-count']);

        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() =>{
        loadPosts();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Postagens Criadas: {total - 1}
                </Text>
            </View>
            <Text style={styles.title}>
                Seja bem vindo
            </Text>

            <FlatList
                data={posts} 
                style={styles.postsList}
                keyExtractor={post => String(post.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadPosts}
                onEndReachedThreshold={0.2}
                renderItem={({ item: post }) => (
                    <View style={styles.posts}>
                        <Text style={styles.postsTitle}>
                        {post.title}
                        </Text>
                        <Text style={styles.postsDescription}>
                            {post.description}
                        </Text>
                        <TouchableHighlight >
                            <Image source={{uri: post.image}} style={styles.postsImage} />
                        </TouchableHighlight>

                        <TouchableOpacity 
                        onPress={() => navigateToDetail(post)}
                        style={styles.postsButton}
                        >
                        <Text style={styles.postsButtonText}>Ver Tudo</Text>
                        <FontAwesome name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}