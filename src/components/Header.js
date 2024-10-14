import React from "react";
const Header = ({totalFollowers,onThemeToggle,isDarkMode}) => {
    return (
        <header>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: {totalFollowers}</p>
        <label className="switch">
            <input type="checkbox" onChange={onThemeToggle} checked={isDarkMode}/>
            <span className="slider round"></span>
        </label>
        </header>
    );
}
const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
};
export default Header;