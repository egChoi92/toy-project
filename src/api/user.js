import { apiClient } from "api/client";

export const userApi = async (apiUrl, requestBody) => {
  const response = await apiClient.post(apiUrl, requestBody)
  .then((response)=> {
    return response;
  }).catch((error) => {
    console.log(`User API Error: ${error}`);
    const errorMessage = error.response.data.message;
    alert(errorMessage === 'Unauthorized'? '비밀번호가 일치하지 않습니다' : errorMessage);
    return false;
  });
  return response;
};
