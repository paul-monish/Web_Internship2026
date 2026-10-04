import endpoint from "../utils/endpoint";

const authService = {
  login: async (data) => {
    debugger;
    const response = await fetch(endpoint.auth.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  },
};
export default authService;
