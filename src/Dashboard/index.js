import React from 'react';
import './style.scss';
import RiskOverview from '../components/RiskOverview';
import ComplienceStatus from '../components/complienceStatus';
import SecurityAlerts from '../components/SecurityAlerts';
import InteractiveChart from '../components/InteractiveChart';
import { Box, Switch } from '@mui/material';

const Dashboard = () => {
    const [darkMode, setDarkMode] = React.useState(false);
    return (
        <div className={`dashboard-container ${darkMode ? 'dark' : ''}`}>
            <div className='heading'>
                <h1 >Dashboard</h1>
                <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    name="darkMode"
                    color="secondary"
                />
            </div>
            <Box className='dashboard-content'>
                <Box>
                    <RiskOverview darkMode = {darkMode} />
                    <SecurityAlerts darkMode = {darkMode} />
                </Box>
                <Box>
                    <ComplienceStatus darkMode = {darkMode} />
                    <InteractiveChart darkMode = {darkMode} />
                </Box>
            </Box>


        </div>
    );
};

export default Dashboard;