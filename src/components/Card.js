import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Card = ({ platform, followers, dailyChange }) => {
    const getIcon = (platform) => {
        switch (platform) {
            case 'Facebook':
                return <FaFacebookF color="hsl(208, 92%, 53%)" />;
            case 'Twitter':
                return <FaTwitter color="hsl(203, 89%, 53%)" />;
            case 'Instagram':
                return <FaInstagram color="hsl(329, 70%, 58%)" />;
            case 'YouTube':
                return <FaYoutube color="hsl(348, 97%, 39%)" />;
            default:
                return null;
        }
    };

    return (
        <div className={`card ${platform.toLowerCase()}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{getIcon(platform)}</span>
                <span>{platform}</span>
            </div>
            <h2>{followers}</h2>
            <p>{dailyChange > 0 ? `+${dailyChange}` : dailyChange} Today</p>
        </div>
    );
};

export default Card;
