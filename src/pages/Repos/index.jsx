import React from "react";
import { fetchRepos } from "../../services";
import RepoCard from "./RepoCard";
import "./index.css";
import { Outlet, useParams } from "react-router-dom";

const reposResource = fetchRepos();
function Repos() {
  const repos = reposResource.read();
  const repoCards = repos.map((repo) => {
    return <RepoCard key={repo.id} {...repo} />;
  });

  const param = useParams()

  return (
    <div className="repos-page">
      <h1>Repositories</h1>
      <div className={`repos ${Object.keys(param).length!==0?"show-repos":""}`}>
        <div className="repocards-container">{repoCards}</div>
        <Outlet/>
      </div>
    </div>
  );
}

export default Repos;
