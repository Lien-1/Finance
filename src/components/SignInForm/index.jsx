import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Link } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
  handleDisplay: PropTypes.func,
};

SignInForm.defaultProps = {
  onSubmit: null,
  handleDisplay: null,
};

function SignInForm(props) {
  const { onSubmit, handleDisplay } = props;
  const [value, setValue] = React.useState("Organization");
  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    if (!onSubmit) return;

    const formValues = {
      email,
      password,
    };
    onSubmit(formValues);
  };

  return (
    <div className="sign-in">
      <div className="form">
        <h2 className="heading">Welcome back, please sign in below!</h2>

        <div className="tabs">
          <Tabs
            value={value}
            onChange={handleChangeValue}
            aria-label="wrapped label tabs example"
          >
            <Tab className="tab" value="Organization" label="Organization" />
            <Tab className="tab" value="Individual" label="Individual" />
          </Tabs>
        </div>
        <div className="content">
          <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
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
          <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              className="input"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleChange}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={password}
              onChange={(e) => {
                handleChange(e);
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <div className="forgot-password">
            <Link style={{ textDecoration: "none" }} href="/forgot-password">
              Forgot Password?
            </Link>
          </div>
          <Button
            size="large"
            sx={{
              width: "100%",
              margin: 1,
            }}
            onClick={handleSubmit}
            variant="contained"
          >
            Sign In
          </Button>
        </div>
      </div>
      <div className="sub-info">
        <div className="sub-info-left">
          <span>You have an available account?</span>
          <Link
            style={{ textDecoration: "none", marginLeft: "8px" }}
            onClick={handleDisplay}
            href="#"
          >
            Sign Up
          </Link>
        </div>
        <div className="sub-info-right">
          <span>English</span>
          <span style={{ color: "blue" }}>VietNam</span>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
