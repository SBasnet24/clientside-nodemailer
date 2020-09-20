import React from "react";

const Input = ({ name, value, onChange, placeholder, label, type }) => {
  return (
    <React.Fragment>
      <div className="form-group mb-3">
        {label && (
          <label>
            <h2>{label}</h2>
          </label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </React.Fragment>
  );
};

export default Input;
