import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
        position: 'absolute',
        right: 0
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 30,
        color: '#13131a',
        fontWeight: 'bold'
    },

    postsTitle: {
        width: 50,
        height: 50
    },

    postsList: {
        marginTop: 32
    },

    posts: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
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

    postsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        alignItems: 'center'
    },

    postsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
})