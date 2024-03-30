import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [value, setValue] = useState();

  // GET OPARATION

  const getData = async () => {
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

  return (
    <div>
      <h1>GET DATA</h1>
      <button style={{ cursor: "pointer" }} onClick={getData}>
        Click me to get data
      </button>

      <div>
        {value && (
          <form>
            <div>
              <input
                type="text"
                name="name"
                value={deatils.name}
                placeholder="Enter Name"
                onChange={adddeatils}
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="email"
                value={deatils.email}
                placeholder="Enter email"
                onChange={adddeatils}
              />
            </div>
            <br />
            <div>
              <button onClick={postdetails}>Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
