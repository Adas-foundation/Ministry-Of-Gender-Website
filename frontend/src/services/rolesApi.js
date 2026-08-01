import { API_URL, authHeaders, handleResponse } from './api'

// GET /roles
export async function getRoles() {
  const response = await fetch(`${API_URL}/roles`, { headers: authHeaders() })
  return handleResponse(response)
}

// GET /roles/:id
export async function getRole(id) {
  const response = await fetch(`${API_URL}/roles/${id}`, { headers: authHeaders() })
  return handleResponse(response)
}

// POST /roles — body: { roleName }
export async function createRole(data) {
  const response = await fetch(`${API_URL}/roles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

// PATCH /roles/:id
export async function updateRole(id, data) {
  const response = await fetch(`${API_URL}/roles/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

// DELETE /roles/:id
export async function deleteRole(id) {
  const response = await fetch(`${API_URL}/roles/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })
  return handleResponse(response)
}
