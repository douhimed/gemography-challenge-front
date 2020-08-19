import React, { useState, useEffect } from "react";
import { getDate } from "../utilities/dates.js";
import ReposList from "./../components/ReposList/index";
import axios from "axios";
import { GIT_URL } from "./../utilities/constants";
import Dropdown from "./../components/Dropdown/index";
import Pagination from "./../components/Pagination/index";
import Spinner from "../components/Spinner/index.js";
import Error from "../components/Error/index.js";
import { useFetch } from "./../hooks/index";

const options = [
  { value: 5, label: 5 },
  { value: 10, label: 10 },
  { value: 20, label: 20 },
];

const App = (props) => {
  const [pageSize, setPageSize] = useState(options[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const [data, error, isLoading] = useFetch(
    "/search/repositories",
    { q: `created:>${getDate()}` },
    []
  );

  const index = currentPage * pageSize.value;

  let repos = [];
  if (data) repos = [...data.items];

  let reposUI = <Error message="No data found" color="green" />;
  if (repos.length > 0)
    reposUI = (
      <div className="ui grid">
        <div className="left floated six wide column">
          <Dropdown
            selected={pageSize}
            options={options}
            onSelectedChange={(option) => {
              setPageSize(option);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="right floated six wide column">
          <Pagination
            onClickHandler={(page) => setCurrentPage(page)}
            currentPage={currentPage}
            lastPage={Math.ceil(repos.length / pageSize.value)}
          />
        </div>
        <ReposList repos={repos.slice(index - pageSize.value, index)} />
      </div>
    );

  return (
    <div className="ui container" style={{ margin: "50px 0px" }}>
      <h2>GitHub Repositories created in the last month</h2>
      {error && <Error message={error} />}
      {isLoading && <Spinner />}
      {!isLoading && reposUI}
    </div>
  );
};

export default App;
