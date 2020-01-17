const {expect} = require('chai')
const supertest = require('supertest')
const app = require('../app')

describe('GET /notes', () => {
    it('should return an array of notes', () => {
      return supertest(app)
        .get('/notes')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            expect(res.body).to.be.an('array')
            expect(res.body).to.have.lengthOf.at.least(1)
            const note = res.body[0]
            expect(note).to.include.all.keys(
                'id', 'content', 'created'
            );
        });
    })
});

describe('Express App', () => {
    it('should return a message from GET /', () => {
        supertest(app)
            .get('/')
            .expect(200, 'Fede, Speranza e Carita');
    });
}); 