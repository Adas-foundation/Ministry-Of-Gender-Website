import { API_URL, authHeaders, handleResponse } from './api'

// GET /notifications
export async function getNotifications() {
  const response = await fetch(`${API_URL}/notifications`, { headers: authHeaders() })
  return handleResponse(response)
}

// GET /notifications/report/:reportId
export async function getNotificationsByReport(reportId) {
  const response = await fetch(`${API_URL}/notifications/report/${reportId}`, {
    headers: authHeaders(),
  })
  return handleResponse(response)
}
