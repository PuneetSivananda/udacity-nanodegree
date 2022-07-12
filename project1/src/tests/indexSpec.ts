import supertest from 'supertest';
import app from '../index';
import { resizeImage } from '../controllers';

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
      '/api/v1/resize?name=encenadaport&width=200&height=200'
    );
    expect(response.status).toEqual(200);
  });

  xit('tests image resize endpoint to return 404 status code if it failes', async () => {
    const response = await request.get(
      '/api/v1/resize?name=encenadap&width=200&height=200'
    );
    expect(response.status).toEqual(404);
  });
});

describe('Spec for Testing Image File is created', () => {
  it('tests image resize function call', async () => {
    const response = await resizeImage('encenadaport', 300, 300);
    expect((response?.destPath)?.split("project1")[1]).toEqual(
      `\\upload\\process\\encenadaport_300_300.jpg`
    );
  });
});
