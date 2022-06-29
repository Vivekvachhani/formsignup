import React from "react";
import PropTypes from "prop-types";

import { Formik, Form } from "formik";
import { IconButton,InputAdornment } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Input from "../../../common/FormControls/input/input";
import  CommonButton  from "../../../common/Button/Button";

import useStyle from "./style";

const Login = ({ validationSchema, submitContactUsForm }) => {
  const classes = useStyle();

  const [isVisible, setIsVisible] = React.useState(false);

  const initialValues = {
    email: "",
    password: "",
    firstName:"",
    lastName:""
  };
  return (
    <div className={classes.loginFormMain}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitContactUsForm}
      >
        {() => (
          <Form id="login-form">
            <div className={classes.loginForm}>
              <div className={classes.avatarLogo}>
                Form
                {/* <img src={'Login'} height={50} width={100} alt="Logion" /> */}
              </div>
              <Input
                name="firstName"
                Required
                type="text"
                id="firstName"
                label="firstName"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon fontSize="small" color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
                <Input
                name="lastName"
                Required
                type="text"
                id="lastName"
                label="lastName"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon fontSize="small" color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
           <Input
              name="email"
              Required
              type="text"
              id="email"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon fontSize="small" color="primary" />
                  </InputAdornment>
                ),
              }}
            />
              <Input
                name="password"
                Required
                type={isVisible ? "text" : "password"}
                id="password"
                label="Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon fontSize="small" color="primary" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setIsVisible(!isVisible)}>
                        {!isVisible ? (
                          <VisibilityOffIcon fontSize="small" />
                        ) : (
                          <VisibilityIcon fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <CommonButton
                btnLabel="SignUp"
                className={classes.loginBtn}
                form="login-form"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

Login.propTypes = {
  validationSchema: PropTypes.object,
  submitContactUsForm: PropTypes.func,
  isLoading: PropTypes.bool,
};

Login.defaultProps = {
  validationSchema: {},
  submitContactUsForm: () => {},
  isLoading: false,
};

export default Login;