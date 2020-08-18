import React from "react";
import { formatDate } from "../../utilities/dates";
import RepoDetails from "../RepoDetails";

const ReposList = ({ repos }) => {
  const reposUI = repos.map((repo) => (
    <RepoDetails key={repo.id} repo={repo} />
  ));

  return <div className="ui cards">{reposUI}</div>;
};

export default ReposList;
