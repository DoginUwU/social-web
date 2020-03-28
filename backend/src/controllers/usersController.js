const conn = require('../database/conn');
const generateUniqueID = require('../utils/generateUniqueID')

module.exports = {
    async create(request, response){
        const { first_name, last_name, email, nickname, image, password } = request.body;

        const id = generateUniqueID();

        await conn('users').insert({
            id,
            first_name,
            last_name,
            email,
            image,
            nickname,
            password
        });

        return response.json({ id });
    },
    async index(request, response){
        const users = await conn('users').select('*');

        return response.json(users);
    },
    async delete(request, response){
        const { id, password } = request.params;

        const user = await conn('users').where('id', id).where('password', password).first();

        if(user.id != id || user.password != password || !user)
            return response.status(401).json( { error: 'Operation not authorized!'})
        
        await conn('users').where('id', id).delete();

        return response.status(204).send();
    }
}