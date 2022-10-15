import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GroupFinder.scss';
import GroupList from './GroupList/GroupList';
import {ReactComponent as DiscussionIcon} from "../../assets/icons/03_Discussion.svg";
import {ReactComponent as GroupIcon} from "../../assets/icons/03_Group.svg";
import {ReactComponent as FinderIcon} from "../../assets/icons/03_Finder.svg";
import {ReactComponent as SupportIcon} from "../../assets/icons/03_Question.svg";
import { ReactComponent as BasketballIcon } from "../../assets/icons/sports-basketball.svg";
import { ReactComponent as SwimmingIcon } from "../../assets/icons/sports-swimming.svg";
import { ReactComponent as TennisIcon } from "../../assets/icons/sports-tennis.svg";
import { ReactComponent as BilliardIcon } from "../../assets/icons/sports-billiards.svg";
import { ReactComponent as GolfIcon } from "../../assets/icons/sports-golf.svg";
import { ReactComponent as FootballIcon } from "../../assets/icons/sports-soccer.svg";
import { ReactComponent as BaseballIcon } from "../../assets/icons/sports-baseball.svg";
import { ReactComponent as VolleyballIcon } from "../../assets/icons/sports-volleyball.svg";
import { ReactComponent as GymIcon } from "../../assets/icons/sports-bodybuilding.svg";
import { ReactComponent as BadmintonIcon } from "../../assets/icons/sports-badminton.svg";
import { ReactComponent as TableTennisIcon } from "../../assets/icons/sports-table-tennis.svg";
import { ReactComponent as DartsIcon } from "../../assets/icons/sports-darts.svg";
import { ReactComponent as ArcheryIcon } from "../../assets/icons/sports-archery.svg";
import { ReactComponent as SkatingIcon } from "../../assets/icons/sports-skating.svg";
import { ReactComponent as AllIcon } from "../../assets/icons/8725478_apps_icon.svg";
import { ReactComponent as ComputerIcon } from "../../assets/icons/3643757_computer_desktop_monitor_pc_personal_icon.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

const GroupFinder = () => {
  const [groups, setGroups] = useState([]);

  const categoryArr = [
    {"title":"All sports", "image": AllIcon}, 
    {"title":"Basketball", "image": BasketballIcon}, 
    {"title":"Billiards", "image": BilliardIcon}, 
    {"title":"Tennis", "image": TennisIcon},
    {"title":"Swimming", "image": SwimmingIcon},
    {"title":"Golf", "image": GolfIcon}, 
    {"title":"Soccer", "image": FootballIcon},
    {"title":"Baseball", "image": BaseballIcon},
    {"title":"Volleyball", "image": VolleyballIcon},
    {"title":"Bodybuilding", "image": GymIcon},
    {"title":"Badminton", "image": BadmintonIcon},
    {"title":"Table Tennis", "image": TableTennisIcon},
    {"title":"Darts", "image": DartsIcon},
    {"title":"Archery", "image": ArcheryIcon},
    {"title":"Ice Skating", "image": SkatingIcon},
    {"title":"E Sports", "image": ComputerIcon},
  ]

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
    <div className="groups-container">
      <section className="groups-sidebar">
        <section className="section-category">
          <h3>Categories</h3>
          <ul className="groups-categories">
            <li className="category-item">
              <span>
                <DiscussionIcon/>
              </span>
              Discussions
            </li>
            <li className="category-item">
              <span>
                <GroupIcon/>
              </span>
              Groups
            </li>
            <li className="category-item">
              <span><FinderIcon/></span>
              Finder
            </li>
            <li className="category-item">
              <span><SupportIcon/></span>
              Support
            </li>
          </ul>
        </section>
        <section className="section-sports">
          <h3>Sort by sport</h3>
          <ul className="groups-categories">
            {
              categoryArr.map((category, index) => (
                <li className="category-item">
                  <span>{<category.image/>}</span>
                  {category.title}
                </li>
                
              ))
            }
          </ul>
        </section>
        
      </section>
      <div className="groups-content">
        <div className="groups-heading">
          <h1>All Groups</h1>
          <Link to="/groups/create">
            <div className="group-create-button">
              Create a group
              <PlusIcon/>
            </div>
            
          </Link>
        </div>
        <div className="groups-filter">
          <p>{`${21} groups`}</p>
          <div className="filters">
            <p>Newest</p>
            <p>Popular</p>
            <p>Members</p>
          </div>
        </div>
        <section>
          <GroupList/>
        </section>
      </div>
      
      
    </div>
    
      
  )
}

export default GroupFinder;