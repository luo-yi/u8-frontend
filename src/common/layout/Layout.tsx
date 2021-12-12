/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocalStorage } from '../hooks';
import Sidebar from './Sidebar';
import { LayoutProps } from './interfaces';

function Layout(props: LayoutProps) {
  const { children, routes } = props;

  const [darkLocal, setDarkLocal] = useLocalStorage<boolean>('darkMode', true);
  const [dark, setDark] = useState(darkLocal);

  useEffect(() => setDarkLocal(dark), [dark]);

  const onDarkChange = (e: any) => {
    setDark(e.target.checked);
  };

  const theme = createMuiTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      ...(!dark
        ? {
          background: {
            default: '#e6e8ec',
          },
        }
        : {
          background: {
            default: '#303030',
          },
        }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex">
        <Sidebar routes={routes} dark={dark} onDarkChange={onDarkChange} />
        {children}
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
