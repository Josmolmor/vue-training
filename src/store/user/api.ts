import { client } from '@/store/api'

import { User } from '@/@types/user'

export async function retrieveCurrentUser(): Promise<User> {
  const response = await client.get(`profile/`);
  return response.data
}
