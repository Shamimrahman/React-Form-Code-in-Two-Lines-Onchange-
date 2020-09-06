import React, { useState } from "react";
import "./index.css";

let App = () => {
  let [fullname, funame] = useState({
    fname: "",
    lname: "",
    cgpa: "",
    phn: "",
  });



  

  let input_event = (event) => {
    const { name, value } = event.target;

    funame((prevalue) => { //100 lines code turn into 2 lines
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  let onsubmits = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onsubmits}>
        <div className="body-style">
          <h1>
            Hello {fullname.fname} {fullname.lname} {fullname.cgpa}{" "}
            {fullname.phn}
          </h1>

          <input
            type="text"
            placeholder="First Name"
            name="fname"
            onChange={input_event}
          ></input>
          <br></br>
          <br></br>
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={input_event}
          ></input>
          <br></br>
          <br></br>
          <input
            type="text"
            name="cgpa"
            placeholder="Cgpa"
            onChange={input_event}
          ></input>
          <br></br>
          <br></br>
          <input
            type="text"
            name="phn"
            placeholder="Phone-no"
            onChange={input_event}
          ></input>
          <br></br>
          <br></br>

          <button type="submit">
            Click <span>👍</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default App;
