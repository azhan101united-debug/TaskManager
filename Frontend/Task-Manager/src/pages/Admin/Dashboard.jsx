import React from 'react'
import {useUserAuth} from "../../hooks/useUserAuth";
import { useState, useContext, useEffect} from "react";
import {UserContext } from "../../context/userContext";
import DashboardLayout from "../../components/layouts/DashboardLayout";

const Dashboard = () => {
  useUserAuth();

  const { user } = useContext(UserContext);

  return <DashboardLayout>
    <h1>This is Dashboard page</h1>
  </DashboardLayout>
};

export default Dashboard
