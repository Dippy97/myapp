import React from 'react';
import { CircularProgress, Box, Typography, Stack } from '@mui/material';
import './style.scss';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <Stack sx={{ width: '100%', color: '#a28089' }} spacing={2}>

                <CircularProgress variant="determinate" {...props} />
            </Stack>
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: '#d3899c', fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                    {`${Math.round(props.value)}`}
                </Typography>
            </Box>
        </Box>
    );
}


const RiskOverview = (props) => {
    const [progrssBarValue, setProgressBarValue] = React.useState(0);

    React.useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setProgressBarValue(65);
        };

        fetchData();
    }
    , []);

    return (
        <Box className={`section-container risk-overview ${props.darkMode ? 'dark' : ''}`}>
            <h1>Risk Overview</h1>
            <Typography>This section provides an overview of the risk management status.</Typography>
            <Box className='progress-container'>
                <CircularProgressWithLabel value={progrssBarValue} color="inherit" thickness={6} size="5rem" />
                <ul>
                    <li>Data Privacy</li>
                    <li>Vendor Risk</li>
                    <li>Access Control</li>
                </ul>
            </Box>
        </Box>
    );
};

export default RiskOverview;