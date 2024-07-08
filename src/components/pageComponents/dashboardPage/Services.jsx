import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-mongodb-server-url/api',
});

export const getFolders = () => api.get('/folders');
export const createFolder = (name) => api.post('/folders', { name });
export const renameFolder = (id, name) => api.put(`/folders/${id}`, { name });
export const deleteFolder = (id) => api.delete(`/folders/${id}`);
export const uploadDocument = (folderId, file) => {
  const formData = new FormData();
  formData.append('document', file);
  return api.post(`/folders/${folderId}/documents`, formData);
};
export const renameDocument = (folderId, documentId, name) =>
  api.put(`/folders/${folderId}/documents/${documentId}`, { name });
export const deleteDocument = (folderId, documentId) =>
  api.delete(`/folders/${folderId}/documents/${documentId}`);
export const getDocuments = (folderId) => api.get(`/folders/${folderId}/documents`);