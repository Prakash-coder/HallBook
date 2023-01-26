import { useState } from "react";
import Input from "./Input";

function LoginForm() {
  const loginFields = [
    {
      labelText: "Roll No:",
      labelFor: "campusRollNo",
      id: "userName",
      name: "userName",
      type: "text",
      isRequired: true,
      placeholder: "Eg. PUL070BCT542",
    },
    {
      labelText: "Password",
      labelFor: "password",
      id: "password",
      name: "password",
      type: "password",
      isRequired: true,
      placeholder: "Password",
    },
  ];

  let fieldsState = {};
  loginFields.forEach((field) => (fieldsState[field.id] = ""));
  

  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  return (
    <form>
      <div>
        {loginFields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
    </form>
  );
}

export default LoginForm;
