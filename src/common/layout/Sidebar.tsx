/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { SidebarProps } from './interfaces';

const drawerProps = {
  sx: {
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
    },
  },
};

function Sidebar(props: SidebarProps) {
  const { routes, dark, onDarkChange } = props;

  // @ts-ignore
  const isDark = useTheme().palette.mode === 'dark';
  const location = useLocation();

  return (
    <Drawer
      {...drawerProps}
      variant="permanent"
      PaperProps={{ className: isDark ? 'sidebar-paper-dark' : 'sidebar-paper-light' }}
    >
      <Toolbar className={isDark ? 'sidebar-header-dark' : 'sidebar-header-light'}>
        <Typography variant="h1">
          Unit8 Demo
        </Typography>
      </Toolbar>

      <Divider />

      <List className={isDark ? 'sidebar-nav-dark' : 'sidebar-nav-light'}>
        {routes.map(({ path, name }) => (
          <ListItem button component={Link} to={path}>
            <ListItemIcon>
              { location.pathname === path ? (
                <RadioButtonCheckedIcon />
              ) : (
                <RadioButtonUncheckedIcon />
              )}
            </ListItemIcon>
            <ListItemText>{name}</ListItemText>
          </ListItem>
        ))}
      </List>

      <Divider />

      <Box justifyContent="center" display="flex" mt={1}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Light</Typography>
          <Switch checked={dark} onChange={onDarkChange} />
          <Typography>Dark</Typography>
        </Stack>
      </Box>

    </Drawer>
  );
}

export default Sidebar;
