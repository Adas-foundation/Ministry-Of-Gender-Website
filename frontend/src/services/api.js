export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export function authHeaders(extra = {}) {
  const token = localStorage.getItem('safereport_token')
  return token ? { Authorization: `Bearer ${token}`, ...extra } : { ...extra }
}

export async function handleResponse(response) {
  if (!response.ok) {
    const data = await response.json().catch(() => ({}))
    const message = Array.isArray(data.message) ? data.message.join(', ') : data.message
    throw new Error(message || `Request failed with status ${response.status}`)
  }
  if (response.status === 204) return null
  return response.json()
}
