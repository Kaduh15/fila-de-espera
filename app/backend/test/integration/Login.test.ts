import { PrismaClient } from '@prisma/client';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import chai from 'chai';

import { app } from '../../src/app';
import prisma from '../../src/prisma/client';

chai.use(chaiHttp);

const { expect, request } = chai;

describe('Login Router', () => {
  describe('POST /login', () => {
    it('should return 200 when login is successful', async () => {
      sinon
        .stub(prisma.admin, 'findFirst')
        .resolves({ id: 1, password: '123' });

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