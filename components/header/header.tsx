import React from 'react';
import { useState } from 'react';
import styles from './header.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import { style } from '@mui/system';

export default function Header() {
  const [drawerState, toggleDrawerState] = useState<boolean>(false);
  //   const useStyles = makeStyles({
  //     paper: {
  //       background: 'red',
  //     },
  //   });
  //   const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: '-webkit-linear-gradient(red, #333)' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: 'black' }}
            onClick={() => toggleDrawerState(!drawerState)}
          >
            <FontAwesomeIcon icon={faBars} />
            <Drawer open={drawerState}>
              <Box sx={{ width: '200px' }}>
                <Link href="/leagueOverview">
                  <div className={styles.drawer_header}>
                    <h2>Home</h2>
                  </div>
                </Link>
                <Link href="/leagueOverview">
                  <div className={styles.drawer_item}>
                    <h3>League Overview</h3>
                  </div>
                </Link>
                <Link href="/newtrade">
                  <div className={styles.drawer_item}>
                    <h3>Submit a Trade</h3>
                  </div>
                </Link>
              </Box>
            </Drawer>
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
