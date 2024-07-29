import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [list, setList] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => setList(data));
  }, [url]);

  return (
    <div className="space-y-5">
      <h1>Fetched Data</h1>
      <button
        className="border-2 border-black mr-5 px-3"
        onClick={() => {
          setUrl("");
          setList([]);
        }}
      >
        Remove
      </button>
      <button
        className="border-2 border-black mr-5 px-3"
        onClick={() => {
          setUrl("http://localhost:8000/info");
        }}
      >
        Fetch
      </button>
      {list.map((item) => (
        <div key={item.id} className="flex space-x-10">
          <h1>{item.id}</h1>
          <h1>{item.name}</h1>
          <h1>{item.location}</h1>
        </div>
      ))}
    </div>
  );
};

export default DataFetch;
