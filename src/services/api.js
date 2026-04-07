const BASE_URL = "http://localhost:8080/api";

// AUTH
export const registerUser = async (user) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.text();
};

export const loginUser = async (user) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
};

// RESOURCES
export const getResources = async () => {
  const res = await fetch(`${BASE_URL}/resources`);
  return res.json();
};

export const uploadResource = async (formData) => {
  const res = await fetch(`${BASE_URL}/resources/upload`, {
    method: "POST",
    body: formData,
  });
  return res.text();
};

export const downloadResource = async (id) => {
  const res = await fetch(`${BASE_URL}/resources/download/${id}`);
  return res.json();
};