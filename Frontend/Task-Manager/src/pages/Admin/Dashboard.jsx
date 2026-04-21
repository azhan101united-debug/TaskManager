import React from 'react'
import {useUserAuth} from "../../hooks/useUserAuth";
import { useState, useContext, useEffect} from "react";
import {UserContext } from "../../context/userContext";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

const Dashboard = () => {
  useUserAuth();

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const [ dashboardData, setDashboardData ] = useState();
  const [ pieChartData, setPieChartData ] = useState([]);
  const [ barChartData, setBarChartData] = useState([]);
  
  const getDashboardData = async () => {
    try{
      const response = await axiosInstance.get(
        API_PATHS.TASKS.GET_DASHBOARD_DATA
      );
      if(response.data) {
        setDashboardData(response.data);
      }
    }catch(error){
      console.error("Error in getting dashboard data:", error);

    }
  }

  return <DashboardLayout>
    <h1>This is Dashboard page</h1>
  </DashboardLayout>
};

export default Dashboard
