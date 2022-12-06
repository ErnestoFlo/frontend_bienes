import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSigninMutation } from "@store/Services/Security";

import SignUp from "./SignUp";

const IndSignUp  = () => {
  const [signin, { isLoading, status, error, ...mutRest }] = useSigninMutation();
  const Navigator = useNavigate();

  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const  data = await signin({ email, user, password }).unwrap();
    console.log(data);
    Navigator("/home");
  }
  return (
    <SignUp
      email={email}
      setEmail={setEmail}
      user={user}
      setUser={setUser}
      password={password}
      setPassword={setPassword}
      handleClick={handleClick}
      error={error}
    />
  );
}

export default IndSignUp ;