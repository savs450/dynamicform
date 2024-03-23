import React, { useState } from "react";
import "./dynamicform.css";

function DynamicForm() {
  let userData = { user: "", email: "", password: "" };
  const [forms, setForms] = useState([userData]);

  function addForm() {
    setForms([...forms, userData]);
  }
  function handleField(event, index) {
    let updateUser = forms.map((user, i) =>
      index === i
        ?{ ...user, [event.target.name]: event.target.value } 
        : user
    );
    setForms(updateUser);
  }
  function deleteHandler(i) {
    let deleteField = [...forms].splice(i, 1);
    setForms(deleteField);
  }
  function handleSumbit(e) {
    e.preventDefault();
    const formDataJSON = JSON.stringify(forms);
    console.log(formDataJSON); 
  }
  return (
    <div className="main_container">
      <h2>Dynamic Form</h2>
     <form onSubmit={(e)=>handleSumbit(e)}>
     {forms.map((form, i) => (
        <div key={i} className="inner_container">
          <div className="inputfield">
            <input
              name="user"
              type="text"
              placeholder="Enter name"
              onChange={(e) => handleField(e, i)}
              value={form.name}
            ></input>
          </div>
          <div className="inputfield">
            <input
              name="email"
              placeholder="Enter email"
              onChange={(e) => handleField(e, i)}
              value={form.email}
            ></input>
          </div>
          <div className="inputfield">
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={(e) => handleField(e, i)}
              value={form.password}
            ></input>
          </div>
          <div className="deletebutton">
            <button onClick={() => deleteHandler(i)}>X</button>
          </div>
        </div>
      ))}
     </form>
      <button onClick={() => addForm()} className="addbutton">
        Add More
      </button>
      <button  type="submit" onClick={(e)=>handleSumbit(e)}className="addbutton">Submit</button>
    </div>
  );
}

export default DynamicForm;
