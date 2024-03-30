import React, { useEffect, useState } from "react";

const Display = () => {
  const [storedata, setstoredata] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const data = keys.filter((key) => key.startsWith('inputData'));
    setstoredata(data);
  }, []);

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    setstoredata((pre) => pre.filter((item) => item !== key));
  };

  return (
    <div className="dis">
      <h1> Your fetched data</h1>
      <ul>
        {storedata.map((key) => (
          <li >
            <span>{localStorage.getItem(key)}</span>
            <button onClick={() => handleDelete(key)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
