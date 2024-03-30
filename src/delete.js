import axios from "axios";
import React, { useEffect, useState } from "react";
function Delete() {
  const [value, setValue] = useState();

  // GET OPARATION

  const getData = async () => {
    console.log("status");
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${1}`
      );
      setValue(response.data);
      return response;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
  //   useEffect(() => {}, [getData()]);

  console.log("value", value);

  const deleteData = async (id) => {
    try {
      const responce = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}}`
      );
      setValue(responce.data);
      console.log("status", responce);
      return responce;
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <h1>GET DATA</h1>
      <div style={{ display: "flex", gap: "30px" }}>
        <button style={{ cursor: "pointer" }} onClick={getData}>
          Click me to get data
        </button>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => deleteData(value.id)}
        >
          Click me to delete data
        </button>
      </div>

      <div>
        {value && (
          <div>
            <p>{value.id}</p>
            <p>{value.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Delete;
