import { Typography, LinearProgress, Stack } from '@mui/material';
import './style.scss';
import React from 'react';

const ComplienceStatus = () => {
    const complianceData = [
        { regulation: 'ISO 27001', status: '55' },
        { regulation: 'SOC 2,', status: '30' },
        { regulation: 'GDPR', status: '95' },
    ];
    return (
        <div className='section-container compliance-status'>
            <h1>Compliance Status</h1>
            <Typography>This section provides an overview of the compliance status across various regulations and standards.</Typography>
            <div className='compliance-status-container'>
                {complianceData.map((item, index) => (
                    <div key={index} className='compliance-item'>
                        <div className='progress-container'>
                            <Typography className='progress-item' variant='h6'>{item.regulation}</Typography>
                            <Stack sx={{ width: '100%', color: '#a28089' }} spacing={2}>
                                <LinearProgress className='progress-bar' variant="determinate" value={item.status} color={`${item.status >= 90 ? "success" : (item.status <= 30 ? "error" : "inherit")}`} />
                            </Stack>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ComplienceStatus;