import { API_URL, authHeaders, handleResponse } from './api'

// GET /stations
export async function getStations() {
  const response = await fetch(`${API_URL}/stations`, { headers: authHeaders() })
  return handleResponse(response)
}

// GET /stations/district/:districtId
export async function getStationsByDistrict(districtId) {
  const response = await fetch(`${API_URL}/stations/district/${districtId}`, { headers: authHeaders() })
  return handleResponse(response)
}

// GET /stations/nearest?latitude=&longitude=
export async function getNearestStation(latitude, longitude) {
  const query = new URLSearchParams({ latitude: String(latitude), longitude: String(longitude) })
  const response = await fetch(`${API_URL}/stations/nearest?${query}`, { headers: authHeaders() })
  return handleResponse(response)
}
