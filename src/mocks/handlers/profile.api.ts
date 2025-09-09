import { http, HttpResponse } from 'msw';

export const profileApiHandler = [
  http.get('/v1/api/profile', () => {
    return HttpResponse.json({
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      avatar: 'https://via.placeholder.com/150',
      role: 'USER',
      createdAt: '2023-01-01T00:00:00.000Z',
      updatedAt: '2023-12-01T00:00:00.000Z',
      lastLoginAt: '2023-12-01T00:00:00.000Z',
      phoneNumber: '123-456-7890',
    });
  }),
];
