import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Spec for Testing Ping endpoints', () => {
  it('tests ping endpoint will return 200 status code', async () => {
    const response = await request.get('/api/v1/health');
    expect(response.status).toEqual(200);
  });

  it('tests the response for the ping router', async () => {
    const response = await request.get('/api/v1/health');
    expect(response.body.ping).toEqual('pong');
  });
});

describe('Spec for Testing Image Endpoints', () => {
  it('tests image resize endpoint to return 200 status code if it passes', async () => {
    const response = await request.get(
      '/api/v1/resize?file=encenadaport&width=200&height=200'
    );
    expect(response.status).toEqual(200);
  });

  it('tests image resize endpoint to return 400 status code if it failes', async () => {
    const response = await request.get(
      '/api/v1/resize?file=encenadap&width=200&height=200'
    );
    expect(response.status).toEqual(404);
  });
});
