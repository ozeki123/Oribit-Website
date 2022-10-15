import React from "react";
import "./Group.scss";
import itemImage from "../../../../assets/images/banner-right.jpg";
import userImage from "../../../../assets/icons/user-profile.png";
import { Link, Navigate } from 'react-router-dom';
import {ReactComponent as JoinIcon} from "../../../../assets/icons/8725805_join_icon.svg";
import {ReactComponent as QuestionIcon} from "../../../../assets/icons/8725747_question_icon.svg";
import {ReactComponent as MemberIcon} from "../../../../assets/icons/8726460_members_icon.svg";
import {ReactComponent as HeartIcon} from "../../../../assets/icons/8725991_heart_icon.svg";

const Group = ({group}) => {
  return (
    <article className="group-item">
      <div className="group-item-contents">
        <div className="item-image">
          <img src={itemImage}/>
        </div>
        <div className="item-text">
          <div className="item-top">
            <div className="item-user">
              <img src={userImage}/>
              <div className="user-info">
                <p>{group.owner}</p>
                <p>Tokyo, Japan</p>
              </div>
            </div>
            <p className="item-date">Every Thursday</p>
          </div>
          
          <div className="group-info">
            <h3>{group.title}</h3>
            <p>We are a group based in Tokyo that gathers every Wednesdays from 18:30 to play Basketball. People of all skill levels are welcome!</p>
          </div>

          <div className="item-bottom">
            <div className="bottom-left">
              <div className="members effect">
                  <MemberIcon/>
                
                <p>24 Members</p>
              </div>
              <div className="hearts effect">
                  <HeartIcon/>
                
                <p>13 Recommended</p>
              </div>
            </div>
            <div className="bottom-right">
              <Link to={`/groups/${group._id}/join`}>
                <div className="join group-buttons effect">
                  <JoinIcon/>
                  <p><u>Join Group</u></p>
                </div>
              </Link>
              
              <div className="question group-buttons effect">
                <QuestionIcon/>
                <p>Ask a question</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      
    </article>
  )
}

export default Group;
