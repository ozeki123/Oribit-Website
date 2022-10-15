import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router';
import { Dropdown } from '../Dropdown/Dropdown';
import './CreateGroup.scss';
import { GroupForm } from './GroupForm/GroupForm';


const CreateGroup = () => {
  return (
    <section className="create-group-container">
      <div className="create-group-wrapper">
        <div className="create-group-header">
          <h1>Group Information</h1>
          <p>First, we need to know a little bit more about your group.</p>
        </div>
        <div className="line"/>
        <section className="form-section">
          <div className="form-header">
            <h3>Group Info</h3>
            <p>Enter basic information about your new group.</p>
          </div>
          <div className="create-group-form">
            <GroupForm/>
          </div>
          
        </section>
        
      </div>
    </section>
  )
}

export default CreateGroup;