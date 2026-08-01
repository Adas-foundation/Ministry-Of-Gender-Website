import { API_URL, authHeaders, handleResponse } from './api'

// GET /evidence
export async function getEvidence() {
  const response = await fetch(`${API_URL}/evidence`, { headers: authHeaders() })
  return handleResponse(response)
}

// GET /evidence/:id
export async function getEvidenceById(id) {
  const response = await fetch(`${API_URL}/evidence/${id}`, { headers: authHeaders() })
  return handleResponse(response)
}
