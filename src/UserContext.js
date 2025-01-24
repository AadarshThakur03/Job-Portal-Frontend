import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext=createContext();

export const UserProvider=({children})=>{
    const [userData,setUserData]=useState(null);
    const [error,setError]=useState(null);


    useEffect(()=>{
        fetchUserDetails()
    },[])
    const fetchUserDetails = async () => {
        try {
          const token = localStorage.getItem("authToken");
          console.log(token);
    
          if (!token) {
            console.log("Token Not Present");
            
            return;
          }
          const response = await axios.get(
            "http://localhost:3000/api/auth/get-userDetails",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.data.success) {
            console.log(response.data.user);
            setUserData(response.data.user);
          } else {
            setError(response.data.message)
            console.log(response.data.message || "Failed to fetch user details");
          }
        } catch (err) {
            setError(err.response?.data?.message)
          console.error("Error fetching user details:", err);
          console.log(err.response?.data?.message || "An error occurred");
        }
      };


      return(
        <UserContext.Provider value={{userData,fetchUserDetails,error,setUserData}}>
{children}
        </UserContext.Provider>
      )
}