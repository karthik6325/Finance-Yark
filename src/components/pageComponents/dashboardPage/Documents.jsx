// import React, { useState } from 'react';
// import { FaEdit, FaTrash, FaFolder, FaFileUpload } from 'react-icons/fa';

// const DocumentManager = () => {
//   const [folders, setFolders] = useState([]);
//   const [selectedFolder, setSelectedFolder] = useState(null);
//   const [newFolderName, setNewFolderName] = useState('');
//   const [newDocumentName, setNewDocumentName] = useState('');
//   const [file, setFile] = useState(null);

//   const handleCreateFolder = () => {
//     if (newFolderName.trim()) {
//       setFolders([...folders, { id: Date.now(), name: newFolderName, documents: [] }]);
//       setNewFolderName('');
//     }
//   };

//   const handleSelectFolder = (folder) => {
//     setSelectedFolder(folder);
//   };

//   const handleUploadDocument = () => {
//     if (selectedFolder && file) {
//       const updatedFolders = folders.map(folder => {
//         if (folder.id === selectedFolder.id) {
//           return {
//             ...folder,
//             documents: [...folder.documents, { id: Date.now(), name: file.name, file }]
//           };
//         }
//         return folder;
//       });
//       setFolders(updatedFolders);
//       setFile(null);
//       handleSelectFolder(updatedFolders.find(folder => folder.id === selectedFolder.id));
//     }
//   };

//   const handleRenameFolder = (folder) => {
//     const newName = prompt('Enter new folder name', folder.name);
//     if (newName) {
//       setFolders(folders.map(f => (f.id === folder.id ? { ...f, name: newName } : f)));
//     }
//   };

//   const handleDeleteFolder = (folder) => {
//     if (window.confirm(`Are you sure you want to delete the folder "${folder.name}"?`)) {
//       setFolders(folders.filter(f => f.id !== folder.id));
//       setSelectedFolder(null);
//     }
//   };

//   const handleRenameDocument = (document) => {
//     const newName = prompt('Enter new document name', document.name);
//     if (newName) {
//       const updatedFolders = folders.map(folder => {
//         if (folder.id === selectedFolder.id) {
//           return {
//             ...folder,
//             documents: folder.documents.map(doc => (doc.id === document.id ? { ...doc, name: newName } : doc))
//           };
//         }
//         return folder;
//       });
//       setFolders(updatedFolders);
//       handleSelectFolder(updatedFolders.find(folder => folder.id === selectedFolder.id));
//     }
//   };

//   const handleDeleteDocument = (document) => {
//     if (window.confirm(`Are you sure you want to delete the document "${document.name}"?`)) {
//       const updatedFolders = folders.map(folder => {
//         if (folder.id === selectedFolder.id) {
//           return {
//             ...folder,
//             documents: folder.documents.filter(doc => doc.id !== document.id)
//           };
//         }
//         return folder;
//       });
//       setFolders(updatedFolders);
//       handleSelectFolder(updatedFolders.find(folder => folder.id === selectedFolder.id));
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Document Manager</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           value={newFolderName}
//           onChange={(e) => setNewFolderName(e.target.value)}
//           className="border p-2 mr-2"
//           placeholder="New Folder Name"
//         />
//         <button
//           onClick={handleCreateFolder}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Create Folder
//         </button>
//       </div>
//       <div className="grid grid-cols-3 gap-4 mb-4">
//         {folders.map((folder) => (
//           <div
//             key={folder.id}
//             className="border p-4 rounded cursor-pointer"
//             onClick={() => handleSelectFolder(folder)}
//           >
//             <FaFolder className="inline-block mr-2" />
//             {folder.name}
//             <FaEdit
//               className="inline-block ml-2 text-gray-500 cursor-pointer"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleRenameFolder(folder);
//               }}
//             />
//             <FaTrash
//               className="inline-block ml-2 text-red-500 cursor-pointer"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleDeleteFolder(folder);
//               }}
//             />
//           </div>
//         ))}
//       </div>
//       {selectedFolder && (
//         <div className="mb-4">
//           <h2 className="text-xl font-bold mb-4">
//             {selectedFolder.name}
//           </h2>
//           <input
//             type="file"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="mb-2"
//           />
//           <button
//             onClick={handleUploadDocument}
//             className="bg-green-500 text-white px-4 py-2 rounded"
//           >
//             <FaFileUpload className="inline-block mr-2" />
//             Upload Document
//           </button>
//           <div className="grid grid-cols-3 gap-4 mt-4">
//             {selectedFolder.documents.map((document) => (
//               <div key={document.id} className="border p-4 rounded">
//                 <a
//                   href={URL.createObjectURL(document.file)}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {document.name}
//                 </a>
//                 <FaEdit
//                   className="inline-block ml-2 text-gray-500 cursor-pointer"
//                   onClick={() => handleRenameDocument(document)}
//                 />
//                 <FaTrash
//                   className="inline-block ml-2 text-red-500 cursor-pointer"
//                   onClick={() => handleDeleteDocument(document)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentManager;



import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaFolder, FaFileUpload } from 'react-icons/fa';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const DocumentManager = () => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [newFolderName, setNewFolderName] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    loadFolders();
  }, []);

  const loadFolders = async () => {
    const response = await api.get('/folders');
    setFolders(response.data);
  };

  const handleCreateFolder = async () => {
    if (newFolderName.trim()) {
      await api.post('/folders', { name: newFolderName });
      setNewFolderName('');
      loadFolders();
    }
  };

  const handleSelectFolder = async (folder) => {
    setSelectedFolder(folder);
  };

  const handleUploadDocument = async () => {
    if (selectedFolder && file) {
      const formData = new FormData();
      formData.append('document', file);
      await api.post(`/folders/${selectedFolder._id}/documents`, formData);
      setFile(null);
      loadFolders();
    }
  };

  const handleRenameFolder = async (folder) => {
    const newName = prompt('Enter new folder name', folder.name);
    if (newName) {
      await api.put(`/folders/${folder._id}`, { name: newName });
      loadFolders();
    }
  };

  const handleDeleteFolder = async (folder) => {
    if (window.confirm(`Are you sure you want to delete the folder "${folder.name}"?`)) {
      await api.delete(`/folders/${folder._id}`);
      setSelectedFolder(null);
      loadFolders();
    }
  };

  const handleRenameDocument = async (document) => {
    const newName = prompt('Enter new document name', document.name);
    if (newName) {
      await api.put(`/folders/${selectedFolder._id}/documents/${document._id}`, { name: newName });
      loadFolders();
    }
  };

  const handleDeleteDocument = async (document) => {
    if (window.confirm(`Are you sure you want to delete the document "${document.name}"?`)) {
      await api.delete(`/folders/${selectedFolder._id}/documents/${document._id}`);
      loadFolders();
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Document Manager</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
          className="border p-2 mr-2"
          placeholder="New Folder Name"
        />
        <button
          onClick={handleCreateFolder}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Folder
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {folders.map((folder) => (
          <div
            key={folder._id}
            className="border p-4 rounded cursor-pointer"
            onClick={() => handleSelectFolder(folder)}
          >
            <FaFolder className="inline-block mr-2" />
            {folder.name}
            <FaEdit
              className="inline-block ml-2 text-gray-500 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleRenameFolder(folder);
              }}
            />
            <FaTrash
              className="inline-block ml-2 text-red-500 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteFolder(folder);
              }}
            />
          </div>
        ))}
      </div>
      {selectedFolder && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-4">
            {selectedFolder.name}
          </h2>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-2"
          />
          <button
            onClick={handleUploadDocument}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            <FaFileUpload className="inline-block mr-2" />
            Upload Document
          </button>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {selectedFolder.documents.map((document) => (
              <div key={document._id} className="border p-4 rounded">
                <a
                  href={`http://localhost:5000/${document.fileUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {document.name}
                </a>
                <FaEdit
                  className="inline-block ml-2 text-gray-500 cursor-pointer"
                  onClick={() => handleRenameDocument(document)}
                />
                <FaTrash
                  className="inline-block ml-2 text-red-500 cursor-pointer"
                  onClick={() => handleDeleteDocument(document)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentManager;
