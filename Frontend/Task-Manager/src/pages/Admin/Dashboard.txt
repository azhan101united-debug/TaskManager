import React from 'react'
import useUserAuth from "../../hooks/useUserAuth";
import { useState, useEffect} from "react";

const Dashboard = () => {
  useUserAuth();

  const { user } = useContext(UserContext);

  return <DashboardLayout>Dashboard</DashboardLayout>
};

export default Dashboard
