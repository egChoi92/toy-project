import { apiClient } from "api/client";

apiClient.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${localStorage.getItem("access_token")}`;
  return config;
});

export const createTodoApi = async (requestBody) => {
  const response = await apiClient
    .post("/todos", requestBody)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const getTodoApi = async () => {
  const response = await apiClient
    .get("/todos")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const updateTodoApi = async (id, requestBody) => {
  const response = await apiClient
    .put(`/todos/${id}`, requestBody)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const deleteTodoApi = async (id) => {
  const response = await apiClient
    .delete(`/todos/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};