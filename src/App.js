import React, { useState, useEffect } from "react";
import "./App.css";
import GoogleStorageFileUploader from "./GoogleStorageFileUploader";
import axios from "axios";

function App() {
  const [files, setFiles] = useState([]);
  const URL = "http://localhost:5000";

  useEffect(() => {
    const test = async () => {
      const resp = await axios.get(`${URL}/get-files-list`, {});
      setFiles(resp?.data?.files);
    };

    test();
  }, []);
  return (
    <>
      <GoogleStorageFileUploader></GoogleStorageFileUploader>;
      {files && files.length > 0 && (
        <>
          <h1>GCP Files List</h1>
          <ul>
            {files.map((file) => {
              return <li key={file.id}>{file.name}</li>;
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
