import chaiHttp from 'chai-http';
import chai from 'chai';

import { app } from '../../src/app';
import { restoreDB } from '../utils/restoreDB';

chai.use(chaiHttp);

const { expect, request } = chai;

describe('add customer in waiting line', () => {
  after(() => {
    restoreDB();
  })

  it('should return 201 when add customer in waiting line is successful', async () => {
    const { status, body } = await request(app)
    .post('/waiting-line')
    .send({ name: 'João'})

    expect(status).to.equal(201);
    expect(body).to.have.property('id');
    expect(body).to.have.property('customer');
    expect(body).to.have.property('createdAt');
  })

  it('should return 400 if not sending the name in the request body', async () => {
    const { status, body } = await request(app)
    .post('/waiting-line')
    .send({ name: '' })

    expect(status).to.equal(400);
    expect(body).to.have.property('error');
    expect(body.error).to.equal('Missing name in request body');
  })
})