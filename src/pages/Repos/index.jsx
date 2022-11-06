import React from "react";
import { fetchRepos } from "../../services";
import RepoCard from "./RepoCard";
import "./index.css";
import { Outlet, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const reposResource = fetchRepos();
function Repos() {
  const repos = reposResource.read();
  const repoCards = repos.map((repo) => {
    return <RepoCard key={repo.id} {...repo} />;
  });

  const [page, setPage] = React.useState(1);
  const pageSize = 8;
  const totalPages = Math.ceil(repoCards.length / pageSize);
  let pageNumbers = [];
  for (var i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const skip = page * pageSize - pageSize;

  const param = useParams();

  return (
    <div 
    className={`repos-page ${
      Object.keys(param).length !== 0 ? "show-repos" : ""
    }`}>
      <Helmet>
        <title>Repositories - Theobano</title>
      </Helmet>
      <h1>Repositories</h1>
      <div
        className={`repos`}
      >
        <div className="repocards-container">
          {repoCards.slice(skip, skip + pageSize)}
          <div className="center">
            <div className="page-pos-display">
              <button
                disabled={page <= 1}
                onClick={() => {
                  setPage((page) => page - 1);
                }}
              >
                Prev
              </button>
              <span>
                Page {page} of {totalPages}
              </span>
              <button
                disabled={page >= totalPages}
                onClick={() => {
                  setPage((page) => page + 1);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Repos;
