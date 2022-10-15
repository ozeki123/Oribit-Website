import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./GroupList.scss";
import Group from "./Group/Group";
import { Link, Navigate } from 'react-router-dom';

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  const getGroups = () => {
    axios.get('/groups')
      .then((res) => {
        const allGroups = res.data;
        setGroups(res.data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getGroups();
    console.log(groups);
  }, [])

  return (
    <div className="group-list">
        {
          groups.map((group) =>  {
            return(
              <div className="group-list-item">
                <Link to={`/groups/${group._id}`} state={{group: group}}>
                  <Group group={group}/>
                </Link>
               
              </div>
            )
          })
        }
        
      </div>
  )
}

export default GroupList;