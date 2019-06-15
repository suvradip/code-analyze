/* test cases for backend part */
/* eslint-disable prefer-arrow-callback, func-names, no-unused-expressions */

const chai = require('chai');
const chaiHttp = require('chai-http');
const { handler } = require('../api');

chai.should();
const { expect } = chai;
chai.use(chaiHttp);

describe('Api(s)', () => {
   describe('/GET status', () => {
      it('it should GET status api start point', done => {
         chai
            .request(handler)
            .get('/')
            .end((err, res) => {
               expect(err).to.be.null;
               expect(res).to.have.status(200);
               res.body.should.be.a('object');
               res.body.should.have.property('success', true);
               done();
            });
      });
   });

   describe('/POST login', () => {
      it('it should POST login request', done => {
         chai
            .request(handler)
            .post('/authentication')
            .send({
               username: 'admin',
               password: 'password',
            })
            .end((err, res) => {
               expect(err).to.be.null;
               expect(res).to.have.status(200);
               res.body.should.be.a('object');
               res.body.should.have.property('success', true);
               res.body.should.have.property('token');
               done();
            });
      });
   });

   // describe('/POST analyze code', () => {
   //    it('it should POST login request', done => {
   //       chai
   //          .request(handler)
   //          .post('/parse', {
   //             language: 'css',
   //             code: 'hello',
   //          })
   //          .end((err, res) => {
   //             if (err) {
   //                throw err;
   //             }

   //             console.log(res.body);

   //             done();
   //          });
   //    });
   // });
});
