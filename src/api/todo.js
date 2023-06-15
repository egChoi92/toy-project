import { apiClient } from "api/client";

apiClient.interceptors.request.use(config => {
	config.headers['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
	return config;
});

export const createTodoApi = async (apiData) => {
  const response = await apiClient
    .post("/todos", apiData)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const getTodoApi = async (apiData) => {
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
  