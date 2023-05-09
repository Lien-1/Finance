import LoopSharpIcon from "@mui/icons-material/LoopSharp";
import { Button, Link } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import React, { useState } from "react";
import "./style.css";

ForgotPassword.propTypes = {};

function ForgotPassword(props) {
  const [randomCode, setRandomCode] = useState(
    (Math.random() + 1).toString(36).substring(6)
  );
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
  };
  const handleChangeCapcha = () => {
    let random = (Math.random() + 1).toString(36).substring(6);
    setRandomCode(random);
  };
  const handleSubmit = () => {
    const formValues = {
      email,
    };
    console.log("formValues", formValues);
  };
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <h2 className="heading" style={{ margin: 0 }}>
          Forgot Password
        </h2>
        <span>Enter your email to receive a code</span>
        <FormControl fullWidth sx={{ mt: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            className="input"
            id="outlined-adornment-email"
            label="Email"
            value={email}
            onChange={(e) => {
              handleChange(e);
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <div className="capcha">
          <div className="capcha-input">
            <h4 style={{ margin: 0 }}>
              Enter the capcha:<i style={{ color: "#b71c1c" }}>*</i>
            </h4>
            <FormControl sx={{ mt: 1 }} variant="outlined">
              <OutlinedInput
                className="input"
                required
                id="outlined-adornment-capcha"
                value={email}
                onChange={(e) => {
                  handleChange(e);
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
          </div>
          <div className="render-capcha">
            <div className="capcha-value">{randomCode}</div>
            <div
              className="capcha-btn"
              style={{ cursor: "pointer" }}
              onClick={handleChangeCapcha}
            >
              <LoopSharpIcon />
            </div>
          </div>
        </div>
        <div style={{ textAlign: "end", marginTop: 16, marginBottom: 16 }}>
          <span>Try another way?</span>
        </div>
        <Button
          size="large"
          sx={{
            width: "100%",
          }}
          onClick={handleSubmit}
          variant="contained"
        >
          Send
        </Button>
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Link
            style={{
              textDecoration: "none",
            }}
            href="/"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
