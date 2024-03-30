import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [value, setValue] = useState();
  const [deatils, setDeatils] = useState({
    email: "",
    name: "",
  });

  console.log("data", value);

  // POST OPARATION
  const adddeatils = (e) => {
    const { name, value } = e.target;
    setDeatils((predata) => ({
      ...predata,
      [name]: value,
    }));
  };

  const postdetails = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        deatils
      );
      setValue(responce.data);
      return responce;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  return (
    <div>
      <h1>POST DATA</h1>
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
      <div>
        {value && (
          <div>
            <p>{value.name}</p>
            <p>{value.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
