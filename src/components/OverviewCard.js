import React from 'react';

const OverviewCard = ({ metric, count, dailyChange }) => {
    return (
        <div className="card overview-card">
            <h3>{metric}</h3>
            <p>{count}</p>
            <span>{dailyChange > 0 ? `+${dailyChange}` : dailyChange} Today</span>
        </div>
    );
};

export default OverviewCard;
