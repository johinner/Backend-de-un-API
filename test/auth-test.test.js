const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app').app


describe('Suite de prueba auth', () => {
    it('should return 401 when no jwt token available', (done) => {
        //cuando la llamada no tiene correcta la llave
        chai.request(app)
            .get('/team')
            .end((err, res) => {
                chai.assert.equal(res.statusCode, 401)
                done()
            })
    });

    it('should return 200 when jwt is valid', (done) => {
        chai.request(app)
            .post('/login')
            .end((err, res) => {
                chai.request(app)
                    .get('/team')
                    .set('Authorization', `JWT ${res.body.token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200)
                        done();
                    });
            });

    });

});

