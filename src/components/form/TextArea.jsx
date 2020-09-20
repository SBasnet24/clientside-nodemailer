import React from "react";

const TextArea = ({ name, value, onChange, placeholder, rows }) => {
  return (
    <div className="form-group">
      <textarea
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </div>
  );
};

export default TextArea;
