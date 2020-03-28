const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/conn');

describe('USER', () => {
    beforeEach(async () =>{
        await conn.migrate.rollback();
        await conn.migrate.latest();
    })

    afterAll(async () => {
        await conn.destroy();
    })

    it('should be able to create a new User', async () => {
        //.set('authorization', 'aa')
        const response = await request(app).post('/users').send({
                first_name: "Luiz",
                last_name: "Eduardo",
                email: "doginuwu@gmail.com",
                nickname: "DoginUwU",
                image: "https://cdn.discordapp.com/attachments/568864759085006853/666455991633838140/b89de1c5999c3c8ffe0645d93133f138.jpg",
                password: "123"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})