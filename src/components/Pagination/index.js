import React from "react";
import Button from "./../Button/index";

const Pagination = ({ onClickHandler, currentPage, lastPage }) => {
  return (
    <div className="ui pagination menu">
      {currentPage !== 1 && [
        <Button
          key="FIRST"
          onClickHandler={() => onClickHandler(1)}
          icon="left"
        />,
        <Button
          key="PREVIOUS"
          onClickHandler={() => onClickHandler(currentPage - 1)}
          icon="minus"
        />,
      ]}
      <Button
        value={currentPage}
        onClickHandler={() => onClickHandler(currentPage)}
      />
      {currentPage !== lastPage && [
        <Button
          key="NEXT"
          onClickHandler={() => onClickHandler(currentPage + 1)}
          icon="plus"
        />,
        <Button
          key="LAST"
          onClickHandler={() => onClickHandler(lastPage)}
          icon="right"
        />,
      ]}
    </div>
  );
};

export default Pagination;
