import { User } from "screens/project-list/search-panel";

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = async (data: { username: string; password: string }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  return {
    id: "1",
    name: "章三",
    token: "xxxx",
  };
  // return fetch(`${apiUrl}/login`, {
  //     method: 'POST',
  //     headers: {
  //         'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  // }).then(
  // async (response) => {
  //     if (response.ok) {
  //         return handleUserResponse(await response.json())
  //     } else {
  //         return Promise.reject(response)
  //     }
  // });
};
export const register = (data: { username: string; password: string }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(response);
    }
  });
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
