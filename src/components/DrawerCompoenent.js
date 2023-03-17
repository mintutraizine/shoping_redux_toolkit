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
import { Link } from 'react-router-dom';

export default function DrawerCompoenent({draweritems}) {
  const [drawerStatus, setDrawerStatus] = React.useState(false)
  return (
    <>
      <Drawer
    
        open={drawerStatus}
        onClose={()=>{setDrawerStatus(false)}}
       
      >
       <List>
       {draweritems.map((item, index) => (
                    <ListItem
                      sx={{ textTransform: "none" }}
                      component={Link}
                      to={{
                        pathname: item.Path,
                      }}
                      key={index}
                     
                    >
                       <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={item.ScreenName} />
            </ListItemButton>
                    </ListItem>
                  ))}
        </List>
      </Drawer>
      <IconButton sx={{color:'white'}} onClick={()=>{setDrawerStatus(true)}}>
<MenuIcon/>
      </IconButton>
    </>
  );
}