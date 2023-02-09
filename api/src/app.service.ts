import { Injectable } from '@nestjs/common';

const userApiUrl = process.env.USER_API_URL || '';

export interface User {
  firstName: string;
  lastName: string;
}

@Injectable()
export class AppService {
  public async getUsers(): Promise<User[]> {
    const response = await fetch(`${userApiUrl}`, { method: 'GET' });
    return response.json();
  }
}
