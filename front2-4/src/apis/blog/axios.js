import axios from "axios";

export const createPost = async (payload) => {
  const { data } = await axios.post(`/api/posts`, payload);
  return data;
};

export const readPost = async (postId) => {
  const { data } = await axios.get(`/api/posts/${postId}`);
  return data;
};

export const updatePost = async (postId, payload) => {
  const { data } = await axios.put(`/api/posts/${postId}`, payload);
  return data;
};

export const deletePost = async (postId) => {
  const { data } = await axios.delete(`/api/posts/${postId}`);
  return data;
};

// {data}랑 response.data 차이
// response.data는 전체 응답 객체를 받고, 그 안에서 .data만 추출
// {data}는 response.data만 뽑아서 바로 data 변수에 담음
export const createUser = async (payload) => {
  const { data } = await axios.post(`/api/users`, payload);
  return data;
};

export const updateUser = async (userId, username) => {
  const { data } = await axios.put(`/api/users/${userId}`, { username });
  return data;
};

export const getUser = async (userId) => {
  const { data } = await axios.get(`/api/users/${userId}`);
  return data;
};

export const deleteUser = async (userId) => {
  const { data } = await axios.delete(`/api/users/${userId}`);
  return data;
};
