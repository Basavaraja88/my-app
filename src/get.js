import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState();
  const [edit, setEdit] = useState({});

  console.log("editedValue", edit);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setValue(response.data);
      return response;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const UpdateDetails = async (id, data) => {
    console.log("hello");
    try {
      const update = await axios.patch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        data
      );
      console.log("reponse", update);
    } catch (error) {
      throw error;
      console.log("error", error);
    }
  };

  const deleteDetails = async (id) => {
    try {
      const reponse = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log("reponse", reponse);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  return (
    <div style={{ display: "flex", gap: "100px" }}>
      <div style={{ paddingLeft: "50px" }}>
        <h1>GET DATA</h1>
        {/* <button style={{ cursor: "pointer" }} onClick={getData}>
          Click me to get data
        </button> */}

        <div>
          <div style={{ display: "flex", gap: "150px" }}>
            <p style={{}}>id</p>
            <p style={{}}>name</p>
          </div>

          {value &&
            value.map((item, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    gap: "100px",
                    paddingBottom: "20px",
                  }}
                  key={item.id}
                >
                  <p style={{ width: "20px" }}>{item.id}</p>
                  <p style={{ width: "600px" }}>{item.title}</p>
                  <p style={{ width: "20px" }}>{item.userId}</p>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => setEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteDetails(item.id)}
                  >
                    delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      {edit && (
        <div style={{ marginTop: "300px" }}>
          <p>Edit</p>

          <form onSubmit={UpdateDetails(edit.id, edit)}>
            <input
              style={{ marginBottom: "20px", display: "block" }}
              type="text"
              name="name"
              value={edit.title}
              placeholder="Enter Name"
              onChange={(e) => setEdit({ ...edit, title: e.target.value })}
            />

            <input
              style={{ marginBottom: "20px", display: "block" }}
              type="text"
              name="phone"
              value={edit.userId}
              placeholder="Enter Name"
              onChange={(e) => setEdit({ ...edit, userId: e.target.value })}
            />
            <button style={{ cursor: "pointer" }} type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
