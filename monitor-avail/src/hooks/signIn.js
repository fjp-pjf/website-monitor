import { useNavigate } from "react-router-dom";

const useSignIn = () => {
  let navigate = useNavigate();

  const signIn = () => {
    console.log("button clicked")
    navigate("/dashboard");
  };

  return {signIn};
};

export default useSignIn;
