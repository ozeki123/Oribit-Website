import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router';
import InputBorder from "../../InputBorder/InputBorder";
import TextArea from "../../TextAreaBorder/TextArea";
import "./GroupForm.scss";


export const GroupForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const categoryArr = [
    "American Football","Basketball", "Baseball", "Darts", 
    "Soccer", "Swimming", "Skating", "Volleyball"
  ]
  const navigate = useNavigate();

  const currentUser = sessionStorage.getItem('user');
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('/groups', {
      title,
      owner: currentUser,
      description: desc
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    navigate('/groups');
  }
  return (
    <form className="group-form" onSubmit={handleSubmit}>
      <div className="group-input format">
        <p>1. Name</p>
        <InputBorder 
          id="title"
          label="Choose a group name" 
          placeholder="Enter group name"
          value={title}
          setTitle={setTitle}
        />
      </div>
      <div className="group-input format">
        <p>2. Sport</p>
        <InputBorder 
          id="title"
          label="Choose a primary sport" 
          placeholder="Choose a sport"
          value={title}
          setTitle={setTitle}
        />
      </div>
      <div className="group-input format">
        <p>3. Skill</p>
        <InputBorder 
          id="title"
          label="Choose required skill level" 
          placeholder="Choose a skill level"
          value={title}
          setTitle={setTitle}
        />
      </div>
      <div className="desc-input format">
        <p>4. Description</p>
        <TextArea
          id={"desc"} 
          label="Group Description" 
          placeholder="Enter a brief description of your group"
          value={desc}
          setDesc={setDesc}
        />
      </div>
        
        <label>Primary sport</label>
        <button>Submit</button>
      </form>
  )
}
