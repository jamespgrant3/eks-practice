import { Injectable } from '@nestjs/common';

const userApiHost = process.env.USER_API_HOST || '';

export interface User {
  firstName: string;
  lastName: string;
}

@Injectable()
export class AppService {
  public async getUsers(): Promise<User[]> {
    const url = `http://${userApiHost}`;
    console.log('making a request to', url);

    try {
      const response = await fetch(url, { method: 'GET' });
      return response.json();
    } catch (e) {
      console.log('an exception occurred', e);
      throw e;
    }
  }
}
