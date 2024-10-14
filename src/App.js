import React,{useState} from "react";
import {ThemeProvider} from "styled-components";
import {lightTheme,darkTheme} from "./Theme";
import Header from './components/Header';
import Card from './components/Card';
import OverviewCard from './components/OverviewCard';
import GlobalStyles from "./Global";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header totalFollowers={23004} onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />
        <div style={gridContainerStyle}>
          <Card platform="Facebook" followers="1987" dailyChange="12" />
          <Card platform="Twitter" followers="1044" dailyChange="99" />
          <Card platform="Instagram" followers="11k" dailyChange="1099" />
          <Card platform="YouTube" followers="8239" dailyChange="-144" />
        </div>
        <h2>Overview - Today</h2>
        <div style={gridContainerStyle}>
          <OverviewCard metric="Page Views" count="87" dailyChange="3" />
          <OverviewCard metric="Likes" count="52" dailyChange="-2" />
          <OverviewCard metric="Retweets" count="117" dailyChange="89" />
          <OverviewCard metric="Profile Views" count="321" dailyChange="47" />
        </div>
      </ThemeProvider>
  );
}
const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
  padding: '2rem',
};

export default App;
