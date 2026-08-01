import { API_URL, authHeaders, handleResponse } from './api'

// GET /district — the backend district route is singular
export async function getDistricts() {
  const response = await fetch(`${API_URL}/district`, { headers: authHeaders() })
  return handleResponse(response)
}

// GET /district/:id
export async function getDistrict(id) {
  const response = await fetch(`${API_URL}/district/${id}`, { headers: authHeaders() })
  return handleResponse(response)
}

// POST /district
export async function createDistrict(data) {
  const response = await fetch(`${API_URL}/district`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

// PATCH /district/:id
export async function updateDistrict(id, data) {
  const response = await fetch(`${API_URL}/district/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

// DELETE /district/:id
export async function deleteDistrict(id) {
  const response = await fetch(`${API_URL}/district/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })
  return handleResponse(response)
}
