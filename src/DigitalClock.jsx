import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment-timezone';

// Clock component container
const ClockComponent = styled.div`
  width: 250px;
  height: 150px;
  background-color: ${({ theme }) => themeColors[theme].timeBackGroundColor};
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Time display style
const TimeComponent = styled.div`
  font-family: ${({ theme }) => themeColors[theme].timeFont}, sans-serif;
  color: ${({ theme }) => themeColors[theme].timeColor};
  font-size: 2.5rem;
  text-align: center;
`;

// Timezone display style
const TimezoneComponent = styled.div`
  color: ${({ theme }) => themeColors[theme].timeColor};
  text-align: center;
  margin-top: 10px;
  font-size: 1rem;
`;

// Theme color settings
const themeColors = {
  Black: { timeColor: 'white', timeFont: 'Orbitron', timeBackGroundColor: 'black' },
  White: { timeColor: 'black', timeFont: 'Tac One', timeBackGroundColor: 'white' },
  Retro: { timeColor: '#EE592E', timeFont: 'Pixelify Sans', timeBackGroundColor: '#F3CDA9' },
};

const DigitalClock = ({ timezone, theme, offset, utcTime, onClick }) => {
  const [time, setTime] = useState('');

  // Update local time based on UTC time and offset
  useEffect(() => {
    const localTime = utcTime.clone().add(offset, 'minutes');
    setTime(localTime.format('HH:mm:ss ddd'));
  }, [utcTime, offset]);

  return (
    <ClockComponent onClick={onClick} theme={theme}>
      <TimeComponent theme={theme}>{time}</TimeComponent>
      <TimezoneComponent theme={theme}>{timezone}</TimezoneComponent>
    </ClockComponent>
  );
};

export default DigitalClock;
