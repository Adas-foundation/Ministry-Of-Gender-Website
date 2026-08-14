import { API_URL, authHeaders, handleResponse } from './api'

// GET /settings — returns { key: value, ... }
export async function getSettings() {
  const response = await fetch(`${API_URL}/settings`, { headers: authHeaders() })
  return handleResponse(response)
}

// PUT /settings — body { settings: { key: value, ... } }
export async function updateSettings(settings) {
  const response = await fetch(`${API_URL}/settings`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify({ settings }),
  })
  return handleResponse(response)
}
