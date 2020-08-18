import React from "react";
import { formatDate } from "../../utilities/dates";

const ReposList = ({ repos }) => {
  const reposUI = repos.map((repo) => (
    <div className="card" key={repo.id}>
      <div className="image">
        <img src={repo.owner.avatar_url} alt="Avatar" />
      </div>
      <div className="content">
        <div className="header">{repo.owner.login}</div>
        <div className="description">{repo.description}</div>
      </div>
      <div className="extra content">
        <span className="right floated">
          Joined in {formatDate(repo.created_at)}
        </span>
        <span>
          <i className="star icon"></i>
          {repo.stargazers_count}
        </span>
      </div>
    </div>
  ));

  return <div className="ui cards">{reposUI}</div>;
};

export default ReposList;
