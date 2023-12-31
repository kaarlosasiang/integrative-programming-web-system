import "../assets/js/axios.min.js";

const http = axios.create({
  baseURL: "http://localhost/integrative-programming-web-system-backend/api",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, X-Requested-With",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "POST, PATCH, GET, DELETE",
  },
});

export const state = {
  response: {},
};

export const get = async (route) => {
  try {
    const res = await http.get(route + ".php");
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const getEditStudent = async (route) => {
  try {
    const res = await http.get(route);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const login = async (formData) => {
  try {
    const res = await http.post("/auth/login.php", formData);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const registerStudent = async (route, formData) => {
  try {
    const res = await http.post(route, formData);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const addFaculty = async (formData) => {
  try {
    const res = await http.post(`/faculty.php`, formData);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const addSubject = async (formData) => {
  try {
    const res = await http.post("/subject.php", formData);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const addInstitute = async (formData) => {
  try {
    const res = await http.post("/institute.php", formData);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const addCourse = async (formData) => {
  try {
    const res = await http.post("/course.php", formData);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const updateStudent = async (id, formData) => {
  try {
    const res = await http.patch(`/student.php?id=${id}`, formData);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const updateSubject = async (code, formData) => {
  try {
    const res = await http.patch(`/subject.php?code=${code}`, formData);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const updateInstitute = async (id, formData) => {
  try {
    const res = await http.patch(`/institute.php?id=${id}`, formData);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const deleteStudent = async (id) => {
  try {
    const res = await http.delete(`/student.php?id=${id}`);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const deleteInstitute = async (id) => {
  try {
    const res = await http.delete(`/institute.php?id=${id}`);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const deleteFaculty = async (id) => {
  try {
    const res = await http.delete(`/faculty.php?id=${id}`);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const deleteCourse = async (id) => {
  try {
    const res = await http.delete(`/course.php?id=${id}`);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};

export const deleteSubject = async (code) => {
  try {
    const res = await http.delete(`/subject.php?code=${code}`);
    state.response = res;
  } catch (err) {
    state.response = err;
  }
};
