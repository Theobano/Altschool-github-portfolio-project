import { githubBaseUrl } from "./CONSTANTS";
import wrapPromise from "./wrapPromise";

function fetchRepos() {
  const url = new URL("/users/theobano/repos", githubBaseUrl);
  const promise = fetch(url).then((res) => res.json());
  return wrapPromise(promise);
}

export default fetchRepos;
