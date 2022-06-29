import React from 'react'
import {showNotification} from "../../../shared/Notification"
import Login from "./Login"
import * as Yup from "yup"
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { noop, setErrorMessage } from '../../../utils/index';
import * as actions from '../redux/actions';
import { yupResolver } from '@hookform/resolvers/yup';
const Logincontainer = ({contactUs,userDetail}) => {
  console.log('userDetail', userDetail)
    const loginSchema =Yup.object().shape({
        email:Yup.string().required("Email is Required").email(),
        password:Yup.string().required("Password is Required"),
        firstName:Yup.string().required("firstName is Required"),
        lastName:Yup.string().required("lastName is Required")
    })

    const formMethods = useForm({ mode: 'onBlur', resolver: yupResolver(loginSchema) });
    const { reset, setError } = formMethods;
    const submitContactUsForm = (values) => {
      debugger
        contactUs(
          values.password,
          values.email,
          values.firstName,
          values.lastName,
        )
          .then(() => {
            showNotification('Message successfully sent!', 'success');
            reset();
          })
          .catch((err) => {
            setErrorMessage(err, setError, {
              password: 'password',
              email: 'email',
              firstName:'firstName',
              lastName:'lastName',
            });
          });
        }
  return (
    <>

    <Login
    validationSchema={loginSchema}
    submitContactUsForm={submitContactUsForm}
    />
    </>
  )
}
Logincontainer.propType ={}
Logincontainer.defaultProps ={}
const mapStateToProps =(state)=>({
  userDetail:state.Loginmenu.userDetail
})

const mapDispatchToProps=(dispatch)=>({
    contactUs: (
        password, email,firstName,lastName,
      ) => dispatch(
        actions.contactUs(
            password, email, firstName,lastName,
        ),
      ),
})

export default connect(mapStateToProps,mapDispatchToProps)(Logincontainer)