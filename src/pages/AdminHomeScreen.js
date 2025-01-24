import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { UserContext } from "../UserContext";

function AdminHomeScreen() {
 
const {userData,error}=useContext(UserContext);
  

  return (
    userData?(
      <div>
      <h2 style={{ textAlign: "center" }}>Welcome to Admin Home Screen</h2>
      <div style={{ textAlign: "center" }}>
        <h2>
          Name: {userData.name} <br /> Email: {userData.email}{" "}
        </h2>
      </div>
    </div>
    ):null
   
  );
}

export default AdminHomeScreen;
