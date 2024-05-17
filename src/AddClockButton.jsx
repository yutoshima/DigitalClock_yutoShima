import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment-timezone';

// Button component container
const ButtonComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  border: solid 1px ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 480px) {
    padding: 10px;
    max-width: 100%;
  }
`;

// Select box style
const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.border};
  height: 40px;
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 5px;
  margin: 10px 0;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 480px) {
    height: 35px;
    font-size: 14px;
    padding: 3px;
  }
`;

// Button style
const Button = styled.button`
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  @media screen and (max-width: 480px) {
    height: 35px;
    font-size: 14px;
  }
`;

const AddClockButton = ({ onAddClock }) => {
  const themes = ['Black', 'White', 'Retro'];
  const [timezone, setTimezone] = useState(moment.tz.guess());
  const [theme, setTheme] = useState('Black');

  // Add new clock with selected timezone and theme
  const addClock = () => {
    onAddClock(timezone, theme);
  };

  return (
    <ButtonComponent>
      <Select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
        {moment.tz.names().map(tzName => (
          <option key={tzName} value={tzName}>{tzName}</option>
        ))}
      </Select>

      <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
        {themes.map(themeOption => (
          <option key={themeOption} value={themeOption}>{themeOption}</option>
        ))}
      </Select>

      <Button onClick={addClock}>Add Clock</Button>
    </ButtonComponent>
  );
};

export default AddClockButton;
