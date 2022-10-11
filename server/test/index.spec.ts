import app from '../src/app';
import request from 'supertest';

function randomName(length: any) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


describe('GET /recipes', () => {
    test('should respond with 200', async () => {
        const response = await request(app).get('/recipes').send();
        expect(response.status).toBe(200);
    });

    test('Should respond with an array of diets', async () => {
        const response = await request(app).get('/diets').send();
        expect(response.body).toBeInstanceOf(Array);
    })

});

describe('POST /recipes', () => {
    test('Create Recipe should respond with 200', async () => {
        const response = await request(app).post('/recipes').send({
            name: randomName(4),
            description: 'test',
            healthScore: 100,
            stepByStep: 'test',
            image: 'test',
            diets: ['test']
        });
        expect(response.status).toBe(200);
    });

    test('Denied Create Recipe with the same name that other one', async () => {
        const response = await request(app).post('/recipes').send({
            name: 'test',
            description: 'test',
            healthScore: 100,
            stepByStep: 'test',
            image: 'test',
            diets: ['test']
        });
        expect(response.status).toBe(400);
    });
});









