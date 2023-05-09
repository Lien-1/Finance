import React from "react";
import SignInForm from "../../components/SignInForm";
import SignUpForm from "../../components/SignUpForm";
import "./style.css";

Authen.propTypes = {};
const handleSubmit = (values) => {
  console.log("values", values);
};
function Authen(props) {
  const [isSignIn, setIsSignIn] = React.useState(true);
  const handleDisplay = () => {
    setIsSignIn((isSignIn) => !isSignIn);
  };
  return (
    <div className="authen">
      <div className="left-side"></div>
      <div className="right-side">
        {isSignIn ? (
          <SignInForm onSubmit={handleSubmit} handleDisplay={handleDisplay} />
        ) : (
          <SignUpForm onSubmit={handleSubmit} handleDisplay={handleDisplay} />
        )}
      </div>
    </div>
  );
}

export default Authen;
