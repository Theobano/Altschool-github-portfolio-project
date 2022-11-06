import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { userDataContext } from "../../contexts";
import "./index.css";

function Home() {
  const [userData] = useContext(userDataContext);
  return (
    <div className="home">
      <Helmet>
        <title>Home - Theobano</title>
      </Helmet>
      <div className="container">
        <div className="center bio-container">
          <img
            src={userData?.avatar_url}
            alt="avatar"
            height={200}
            width={200}
          />
          <div className="name">{userData?.name}</div>
          <div className="bio">{userData?.bio}</div>
        </div>
        <Link to={"/repos"} className="button">
          View Repositories
        </Link>
      </div>
    </div>
  );
}

export default Home;
