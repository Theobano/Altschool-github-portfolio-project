import React from "react";
import { NavLink } from "react-router-dom";
import "./RepoCard.css";

function RepoCard(props) {
  return (
    <NavLink to={`/repos/${props.name}`} className="repocard">
      <div>
        <div className="horizontal-flex space-between repo-name-visib">
          <span className="repo-name">{props.name}</span>
          <span className="repo-visibility">{props.visibility}</span>
        </div>
        {props.description ? (
          <div className="repo-descr">{props.description}</div>
        ) : (
          ""
        )}
      </div>
      <div className="repo-meta">
        {props.language ? <span>{props.language}</span> : ""}
        {props.license ? <span>{props.license.name}</span> : ""}
      </div>
    </NavLink>
  );
}

export default RepoCard;
