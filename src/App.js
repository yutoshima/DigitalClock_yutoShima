import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import DigitalClock from './DigitalClock';
import AddClockButton from './AddClockButton';
import moment from 'moment-timezone';

// Theme settings for the entire app
const theme = {
  colors: {
    primary: '#007BFF',
    secondary: '#6C757D',
    background: '#f9f9f9',
    text: '#333',
    border: '#ccc',
    primaryDark: '#0056b3'
  },
  fonts: {
    main: 'Arial, sans-serif'
  }
};

// Container for the entire app
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.main};
  padding: 20px;
  box-sizing: border-box;
`;

// Header style
const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  text-align: center;
`;

// Container for clocks
const ClockContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
  overflow-y: auto;
`;

const App = () => {
  const themes = ['Black', 'White', 'Retro'];
  const [clocks, setClocks] = useState([]);
  const [utcTime, setUtcTime] = useState(moment.utc());

  // Update UTC time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setUtcTime(moment.utc());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle clock theme change on click
  const handleClockClick = (index) => {
    const newClocks = [...clocks];
    const currentThemeIndex = themes.indexOf(newClocks[index].theme);
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    newClocks[index].theme = themes[nextThemeIndex];
    setClocks(newClocks);
  };

  // Add a new clock
  const handleAddClock = (timezone, theme) => {
    const newClock = { timezone, theme, offset: moment.tz(timezone).utcOffset() };
    setClocks([...clocks, newClock]);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header>デジタル時計アプリ</Header>
        <AddClockButton onAddClock={handleAddClock} />
        <ClockContainer>
          {clocks.map((clock, index) => (
            <DigitalClock
              key={index}
              timezone={clock.timezone}
              theme={clock.theme}
              offset={clock.offset}
              utcTime={utcTime}
              onClick={() => handleClockClick(index)}
            />
          ))}
        </ClockContainer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
