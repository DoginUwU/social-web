const conn = require('../database/conn');
module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await conn('posts').count();

        const posts = await conn('posts')
        .join('users', 'users.id', '=', 'posts.user_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['posts.*', 'users.first_name', 'users.last_name']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(posts);
    },
    async create(request, response){
        const { title, description, image, likes } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await conn('posts').insert({
            title,
            description,
            image,
            likes,
            user_id
        });

        return response.json({ id });
    },
    async delete(request, response){
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const posts = await conn('posts').where('id', id).select('user_id').first();

        if(posts.user_id != user_id)
            return response.status(401).json( { error: 'Operation not authorized!'})
        
        await conn('posts').where('id', id).delete();

        return response.status(204).send();
    }
}