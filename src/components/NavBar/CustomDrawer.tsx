import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';

interface CustomDrawerProps {
  open: boolean;
  navBarHeadings: string[];
  toggleDrawer: any;
}

const list = (navBarHeadings: string[], toggleDrawer: any) => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={() => toggleDrawer(false)}
    onKeyDown={() => toggleDrawer(false)}
    component="div"
  >
    <List>
      {navBarHeadings.map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Box>
);

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  open,
  navBarHeadings,
  toggleDrawer,
}) => (
  <SwipeableDrawer
    anchor="right"
    open={open}
    onClose={toggleDrawer(false)}
    onOpen={toggleDrawer(true)}
  >
    {list(navBarHeadings, toggleDrawer)}
  </SwipeableDrawer>
);
export default CustomDrawer;
