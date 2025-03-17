import { ChangeEvent } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import Switch from '@mui/material/Switch';

export default function ThemeToggle(
  { isDarkMode, handleThemeChange}: {
    isDarkMode: boolean | undefined,
    handleThemeChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
  }
) {
  return (
    <>
      <LightModeIcon fontSize="inherit" />
      <Switch
        checked={isDarkMode}
        onChange={handleThemeChange}
        slotProps={{ 
          input: {'aria-label': isDarkMode ? 'Switch to light mode' : 'Switch to dark mode' }
        }}
      />
      <DarkModeIcon fontSize="inherit" />
    </>
  )
}