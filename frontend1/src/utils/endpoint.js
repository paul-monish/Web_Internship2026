const API = import.meta.env.VITE_API_BASE_URL;

export default {
  auth: {
    login: `${API}/auth/login`,
  },
  students: {
    all: `${API}/students`,
    delete: (id) => `${API}/students/${id}`,
  },
};
