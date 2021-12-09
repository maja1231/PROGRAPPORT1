const chai = require('chai');
const chaiHTTP = require('chai-http');
const should = chai.should()

chai.use(chaiHTTP);

describe('login', () => {
    describe('POST /login', () => {
        it('den skal returnere et 200 response hvis user er logget ind', function (done) {
            chai
            .request('http://localhost:8080/users')
            .post('/login')
            .send({email: 'hejmail.dk', password: '1234'})
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
            describe('login', () => {
                describe('POST /login', () => {
                    it('den skal returnere et 401 response hvis user ikke er logget ind', function(done){
                        chai
                        .request('http://localhost:8080/users')
                        .post('/login')
                        .send({email: 'hejmail.dk', password: '4321'})
                        .end((err, res) => {
                            res.should.have.status(401);
                            done()
                        })})})
                        describe('login', () => {
                            describe('POST /login', () => {
                        it('den skal returnere et 404 response hvis user ikke eksisterer i databasen', function(done){
                            chai
                            .request('http://localhost:8080/users')
                            .post('/login')
                            .send({email:"nejhej.dk", password:"1234"})
                            .end((err, res) => {
                                res.should.have.status(404);
                                done()
                            }
                        )})
                            })
                        })
                })
            })
        } )
    });