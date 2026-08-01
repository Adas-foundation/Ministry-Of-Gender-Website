import { API_URL, authHeaders, handleResponse } from './api'

// POST /sos-alerts — body { latitude, longitude, accuracy?, source?: 'sos' | 'silent' }
export async function createSosAlert(payload) {
  const response = await fetch(`${API_URL}/sos-alerts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(payload),
  })
  return handleResponse(response)
}

// GET /sos-alerts
export async function getSosAlerts() {
  const response = await fetch(`${API_URL}/sos-alerts`, { headers: authHeaders() })
  return handleResponse(response)
}
