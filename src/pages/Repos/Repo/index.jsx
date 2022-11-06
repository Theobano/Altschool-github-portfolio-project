import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import { Loader } from "../../../components";
import fetchReadme from "../../../services/fetchReadme";
import fetchRepo from "../../../services/fetchRepo";
import "./index.css";

function Repo() {
  const repoName = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState({});
  const [readme, setReadme] = useState();

  useEffect(() => {
    fetchRepo(repoName.repoName).then((res) => {
      setResponse(res);
      fetchReadme(repoName.repoName, res.default_branch).then((res) =>
        setReadme(res)
      );
      setIsLoading(false);
    });
    return () => {
      setIsLoading(true);
    };
  }, [repoName]);

  return (
    <div className="repo">
      <Helmet>
        <title>{repoName.repoName} - Theobano</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="repo-container">
          <h1 className="">{response.name}</h1>
          {response.description ? <div>{response.description}</div> : ""}
          <div className="readme">
            <div className="title-readme">README.md</div>
            <div>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {readme}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Repo;
