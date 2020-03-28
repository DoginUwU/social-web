import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles';

export default function Defail(){
    const navigation = useNavigation();
    const route = useRoute();

    const post = route.params.post;

    function navigateBack(){
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <FontAwesome name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.post}>
                <Text style={styles.postsTitle}>
                    {post.title}
                </Text>
                <Text style={styles.postsDescription}>
                    {post.description}
                </Text>
                <TouchableHighlight >
                    <Image source={{uri: post.image}} style={styles.postsImage} />
                </TouchableHighlight>
            </View>

            <View style={styles.user}>
                <Text style={styles.userName}>
                    Enviado por: au au
                    
                </Text>
                <TouchableHighlight>
                    <Image source={{uri: 'https://cdn.discordapp.com/attachments/568864759085006853/637801402080690207/a66d151eaa99c91b6c22cf36ce89f5ed.jpg'}} style={styles.userImage} />
                </TouchableHighlight>
                <TouchableOpacity style={styles.userLike} onPress={() => {}}>
                    <FontAwesome name="heart" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
        </View>
    );
}