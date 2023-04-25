import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import logo from '../../assets/logo.svg';
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  Drawer,
  Divider,
  Link,
  Box,
  Toolbar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch
} from '@mui/material';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Page {
  page: string;
  icon: React.ElementType;
  path: string;
}
export const pageLinks: Page[] = [
  { page: 'Home', icon: HomeOutlinedIcon, path: '/' },
  { page: 'Movies', icon: TheatersOutlinedIcon, path: 'movies' },
  { page: 'TV Shows', icon: LiveTvOutlinedIcon, path: 'tvshows' }
];

export default function Header() {
  const theme = useTheme();
  const isUpSmallScreens = useMediaQuery(theme.breakpoints.up('sm'));
  const isUpMediumScreens = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setState] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setState(open);
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: 'transparent' }}>
      <Toolbar sx={{ minHeight: { xs: '56px' } }}>
        <Link href='/' sx={{ marginRight: '20px' }}>
          <Box component='img' sx={{ width: '135px' }} alt='Logo' src={logo} />
        </Link>
        <Box
          component='nav'
          sx={{
            flexGrow: 1,
            display: isUpSmallScreens ? 'flex' : 'none',
            flex: '1 1 auto'
          }}>
          <List sx={{ display: 'flex', flexDirection: 'row' }}>
            {pageLinks.map((item: Page) => (
              <ListItem key={item.page}>
                <Link
                  sx={{
                    display: 'flex',
                    flex: '0 0 auto',
                    textDecoration: 'none',
                    color: 'primary.contrastText'
                  }}>
                  {item.page}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flex: isUpSmallScreens ? '0 0 0' : '1 1 auto',
            justifyContent: 'end',
            alignItems: 'center',
            gap: isUpMediumScreens ? '10px' : '0px'
          }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton component='a' sx={{ display: isUpSmallScreens ? 'inline-flex' : 'none' }}>
            <PersonOutlineOutlinedIcon />
          </IconButton>
          <IconButton sx={{ display: isUpSmallScreens ? 'inline-flex' : 'none' }}>
            <WbSunnyOutlinedIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: isUpSmallScreens ? 'none' : 'block', marginLeft: '15px' }}>
          <IconButton aria-label='click to open drawer' onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Drawer data-testid='drawer' anchor='right' open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ p: 2, height: 1 }}>
            <IconButton
              aria-label='click to close drawer'
              sx={{ mb: 2 }}
              onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
            <Divider />
            <Box>
              {pageLinks.map((el: Page) => (
                <ListItem key={el.page}>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: '40px' }}>
                      <el.icon />
                    </ListItemIcon>
                    <ListItemText>
                      <Link sx={{ color: 'primary.contrastText', textDecoration: 'none' }}>
                        {el.page}
                      </Link>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
              <Divider />
              <ListItem>
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: '40px' }}>
                    <AccountCircleOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>Account</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <Switch />
                Dark Mode
              </ListItem>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
