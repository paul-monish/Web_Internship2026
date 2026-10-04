import endpoint from "../utils/endpoint";

const getToken = () => {
  return sessionStorage.getItem("token");
};

const studentService = {
  getAllStudents: async () => {
    const response = await fetch(endpoint.students.all, {
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    });
    const data = await response.json();
    return data?.data;
  },

  deleteStudent: async (id) => {
    const response = await fetch(endpoint.students.delete(id), {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    });
    const data = await response.json();
    return data;
  },
};

export default studentService;
