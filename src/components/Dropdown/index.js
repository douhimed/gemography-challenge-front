import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, onSelectedChange, selected, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => document.body.removeEventListener("click", onBodyClick);
  }, []);

  const optionsUI = options.map((option) => {
    if (selected.value === option.value) return;
    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <div className="two fields">
          {label && <label className="label">{label}</label>}
          <div
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {optionsUI}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
