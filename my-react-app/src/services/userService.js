// Base URL for API requests comes from the Vite environment variable
const API_URL = import.meta.env.VITE_API_URL;

export async function getUserMainData(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const json = await res.json();
  return json.data;
}

export async function getUserActivity(id) {
  const res = await fetch(`${API_URL}/${id}/activity`);
  const json = await res.json();
  return json.data;
}

export async function getUserAverageSessions(id) {
  const res = await fetch(`${API_URL}/${id}/average-sessions`);
  const json = await res.json();
  return json.data;
}

export async function getUserPerformance(id) {
  const res = await fetch(`${API_URL}/${id}/performance`);
  const json = await res.json();
  return json.data;
}
