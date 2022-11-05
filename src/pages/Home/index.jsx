import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userDataContext } from "../../contexts";
import "./index.css";

function Home() {
  const [userData] = useContext(userDataContext);
  return (
    <div className="home">
      <div className="center bio-container">
        <img src={userData?.avatar_url} alt="avatar" height={200} width={200} />
        <div>{userData?.name}</div>
        <div>{userData?.bio}</div>
      </div>
      <Link to={"/repos"} >View Repositories</Link>
    </div>
  );
}

export default Home;
