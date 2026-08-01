import { API_URL, authHeaders, handleResponse } from './api'

// GET /users
export async function getUsers() {
  const response = await fetch(`${API_URL}/users`, { headers: authHeaders() })
  return handleResponse(response)
}

// GET /users/:id
export async function getUser(id) {
  const response = await fetch(`${API_URL}/users/${id}`, { headers: authHeaders() })
  return handleResponse(response)
}

// POST /users — body: { name, email, password, roleId }
export async function createUser(data) {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

// PATCH /users/:id
export async function updateUser(id, data) {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

// DELETE /users/:id
export async function deleteUser(id) {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })
  return handleResponse(response)
}
