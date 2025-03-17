'use client'

import { useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ThemeToggle from '@/app/components/ThemeToggle';

import { themeDark } from '@/app/themeDark';
import { themeLight } from '@/app/themeLight';

export default function HockeyThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = (e: React.SyntheticEvent, checked: boolean) => setIsDarkMode(checked);

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight }>
      <CssBaseline />
      <Container>
        <Box className="flex justify-end items-center" sx={{ pt: '0.5rem' }}>
          <ThemeToggle isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
        </Box>
      </Container>
      {children}
    </ThemeProvider>
  )
}