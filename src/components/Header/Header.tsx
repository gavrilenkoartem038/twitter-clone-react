import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';
import NavList from './NavList';
import { useEffect } from 'react';
import { getToken } from '../../utils/tokenUtils';

const drawerWidth = 240;

type Props = {
  children: JSX.Element
}

export default function Header({children}: Props) {
  const theme = createTheme();

  return (
    <Box sx={{ display: 'flex', maxWidth: 'xl', margin: '0 auto' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, alignItems: 'center'}}>
        <Toolbar sx={{justifyContent: "center", maxWidth: "xl"}}>
          <Typography variant="h6" noWrap component="div">
            Twitter Clone
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: {sm: drawerWidth, xs : theme.spacing(8)},
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: {sm: drawerWidth, xs : theme.spacing(7)}, boxSizing: 'border-box', left: 'auto' },
        }}
      >
        <Toolbar />
        <NavList />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, maxWidth: "xl" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}