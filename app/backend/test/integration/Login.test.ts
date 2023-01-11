import chaiHttp from 'chai-http';
import sinon from 'sinon';
import chai from 'chai';

import { app } from '../../src/app';
import JWT from '../../src/utils/token';
import { resetAdmin, restoreDB } from '../utils/restoreDB';

chai.use(chaiHttp);

const { expect, request } = chai;

describe('Login Router', () => {
  describe('POST /login', () => {
    after(() => {
      restoreDB();
    })

    it('should return 200 when login is successful', async () => {
      resetAdmin();

      sinon
        .stub(JWT, 'tokenGenerator')
        .resolves('Valido');

      const { status, body } = await request(app)
      .post('/login')
      .send({ password: '123' })

      expect(status).to.equal(200);
      expect(body).to.deep.equal({
        token: 'Valido'
      });

      sinon.restore();
    })
  })
});