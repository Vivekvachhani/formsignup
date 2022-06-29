import React from "react";
import Logincontainer from "../module/Login/component/Logincontainer"
const routes = ()=>{
const routes=[
   { 
     name:"Login",
     path:"/login",
    component: Logincontainer,
   },
];
    return routes;
}
export default routes;