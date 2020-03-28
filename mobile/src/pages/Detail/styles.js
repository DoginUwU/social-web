import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    post: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48
    },

    postsTitle: {
        fontSize: 20,
        color: '#41414d',
        fontWeight: 'bold'
    },

    postsDescription: {
        fontSize: 15,
        color: '#41414d',
        marginLeft: 20
    },
    postsImage: {
        width: 320,
        minHeight: 200,
        marginTop: 20,
        borderRadius: 10
    },

    user: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        height: 100
    },

    userName: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        textAlign: 'left'
    },

    userImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        position: 'absolute',
        top: 0,
        right: -10
    },

    userLike:{
        position: 'absolute',
        bottom: 15,
        left: 15
    }
})