import { client } from '@/store/api'

import { Mission } from '@/@types/mission'

export async function listMission(): Promise<Mission[]> {
  const response = await client.get(`missions/`);
  return response.data
}

export async function updateMission(id: number, payload: Mission): Promise<Mission> {
  const response = await client.put(`missions/${id}/`, payload);
  return response.data
}
