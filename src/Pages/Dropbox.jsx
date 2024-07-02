import React, { useState } from 'react';

const Dropbox = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`border-4 border-dashed rounded p-6 w-full max-w-lg text-center ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          multiple
          onChange={handleFileInput}
          className="hidden"
          id="fileUpload"
        />
        <label htmlFor="fileUpload" className="cursor-pointer">
          <p className="text-gray-700 mb-4">Drag & Drop your files here or click to upload</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Select Files
          </button>
        </label>
        {files.length > 0 && (
          <div className="mt-4 text-left">
            <h3 className="font-bold mb-2">Files:</h3>
            <ul className="list-disc list-inside">
              {files.map((file, index) => (
                <li key={index} className="text-gray-700">{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropbox;
