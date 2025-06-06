import React from 'react';
import './style.scss';

const SecurityAlerts = () => {
    const alerts =
        [
            {
                message: "Suspicious login",
                severity: "High",
            },
            {
                message: "Unusual file access",
                severity: "Medium",
            },
            {
                message: "VPN access after hours",
                severity: "Low",
            },
            {
                message: "Multiple failed login attempts",
                severity: "High",
            },
            {
                message: "New device registered",
                severity: "Low",
            }
        ]

    return (
        <div className='section-container security-alerts-container'>
            <h1>Security Alerts</h1>
            <ul className='alerts-list'>
                {alerts.map((alert, index) => (
                    <li key={index} className={`alert-item ${alert.severity.toLowerCase()}`}>
                        <span className='alert-message'>{alert.message}</span>
                        <span className={`alert-severity`}>{alert.severity}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SecurityAlerts;