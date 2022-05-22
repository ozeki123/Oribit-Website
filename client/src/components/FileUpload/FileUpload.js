import axios from 'axios';
import React, { useState } from 'react'

const FileUpload = () => {
  const [fileInput, setFileInput] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const handleChange = (e) => {
    const file = e.target.files[0];
  }

  const handleUpload = ({ target }) => {
    setFileInput(target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("image", fileInput);

    await axios.post("http://localhost:5000/api/image", formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  console.log(fileInput)

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" accept="image/*" onChange={handleUpload}/>
      <button>Upload Image</button>
      </form>
  )
}

export default FileUpload;