const conn = require('../database/conn');
module.exports = {
    async create(request, response){
        const { id } = request.body;
        
        const user = await conn('users').where('id', id)
        .select('first_name').first();

        if(!user)
            return response.status(400).json({ error: 'No User Found'});

        return response.json(user);
    }
}