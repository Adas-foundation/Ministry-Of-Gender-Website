import { API_URL, authHeaders, handleResponse } from './api'

// GET /case-status-history/report/:reportId
export async function getStatusHistoryByReport(reportId) {
  const response = await fetch(`${API_URL}/case-status-history/report/${reportId}`, {
    headers: authHeaders(),
  })
  return handleResponse(response)
}
