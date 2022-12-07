import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSigninMutation } from "@store/Services/Security";

import SignUp from "./SignUp";

const IndSignUp  = () => {
  const [signin, { isLoading, status, error, ...mutRest }] = useSigninMutation();
  const Navigator = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const  data = await signin({ email, name, password }).unwrap();
    console.log(data);
    Navigator("/login");
  }
  return (
    <SignUp
      email={email}
      setEmail={setEmail}
      name={name}
      setName={setName}
      password={password}
      setPassword={setPassword}
      handleClick={handleClick}
      error={error}
    />
  );  
}

export default IndSignUp ;