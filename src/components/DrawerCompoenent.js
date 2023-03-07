import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { IconButton } from '@mui/material';

export default function DrawerCompoenent() {
  const [drawerStatus, setDrawerStatus] = React.useState(false)
  return (
    <>
      <Drawer
    
        open={drawerStatus}
        onClose={()=>{setDrawerStatus(false)}}
       
      >
       <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <IconButton sx={{marginLeft:'auto',color:'white'}} onClick={()=>{setDrawerStatus(true)}}>
<MenuIcon/>
      </IconButton>
    </>
  );
}