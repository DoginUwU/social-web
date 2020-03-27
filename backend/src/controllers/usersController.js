const conn = require('../database/conn');
const crypto = require('crypto');

module.exports = {
    async create(request, response){
        const { first_name, last_name, email, nickname, image, password } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

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
    }
}