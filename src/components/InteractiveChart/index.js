import React from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, } from 'recharts';
import './style.scss';

const InteractiveChart = (props) => {
    const data = [
        { name: 'October', IT: 4000, Market: 2400, Finance: 2400 },
        { name: 'November', IT: 3000, Market: 1398, Finance: 2210 },
        { name: 'December', IT: 2000, Market: 9800, Finance: 2290 },
        { name: 'January', IT: 2780, Market: 3908, Finance: 2000 },
        { name: 'February', IT: 1890, Market: 4800, Finance: 2181 },
        { name: 'March', IT: 2390, Market: 3800, Finance: 2500 },
        { name: 'April', IT: 3490, Market: 4300, Finance: 2100 },
    ];

    return (
        <div className={`section-container interactive-chart ${props.darkMode ? 'dark' : ''}`}>
            <h2>Interactive Chart for Risk Trends</h2>
            <Box className='chart-container'>

                <LineChart width={window.screen.width < 768 ? (window.screen.width < 360 ? 100 : 280 ) : 500} height={200} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="IT" stroke="#ff7300" yAxisId={0} />
                    <Line type="monotone" dataKey="Market" stroke="#387908" yAxisId={1} />
                    <Line type="monotone" dataKey="Finance" stroke="#3803f5" yAxisId={2} />
                </LineChart>
                <Box>
                    <Box className='chart'>
                        <div className='indicators IT'></div>
                        <Typography>IT</Typography>
                    </Box>
                    <Box className='chart'>
                        <div className='indicators market'></div>
                        <Typography>Market</Typography>
                    </Box>
                    <Box className='chart'>
                        <div className='indicators finance'></div>
                        <Typography>Finance</Typography>
                    </Box>
                </Box>
            </Box>

        </div>
    );
};

export default InteractiveChart;