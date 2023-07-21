const header = {
  "Content-Type": "application/json",
};

const errorServer = { ok: false, message: "Error en el servidor." };

export const post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: header,
    body: JSON.stringify(body),
  });
  return response.ok ? response.json() : errorServer;
};

export const get = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: header,
  });
  return response.ok ? response.json() : errorServer;
};
