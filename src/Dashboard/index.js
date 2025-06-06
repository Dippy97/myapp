import React from 'react';
import './style.scss';
import RiskOverview from '../components/RiskOverview';
import ComplienceStatus from '../components/complienceStatus';
import SecurityAlerts from '../components/SecurityAlerts';
import InteractiveChart from '../components/InteractiveChart';
import { Box } from '@mui/material';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <h1 className='heading'>Dashboard</h1>
            <Box className='dashboard-content'>
                <Box>
                    <RiskOverview />
                    <SecurityAlerts />
                </Box>
                <Box>
                    <ComplienceStatus />
                    <InteractiveChart />
                </Box>
            </Box>


        </div>
    );
};

export default Dashboard;