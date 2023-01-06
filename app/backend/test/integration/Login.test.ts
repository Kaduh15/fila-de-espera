import chaiHttp from 'chai-http';
import sinon from 'sinon';
import chai from 'chai';

import { app } from '../../src/app';
import prisma from '../../src/prisma/client';
import JWT from '../../src/utils/token';

chai.use(chaiHttp);

const { expect, request } = chai;

describe('Login Router', () => {
  describe('POST /login', () => {
    after(() => {
      sinon.restore();
    })

    it('should return 200 when login is successful', async () => {
      sinon
        .stub(prisma.admin, 'findFirst')
        .resolves({ id: 1, password: '123' });

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
    })
  })
});