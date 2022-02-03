import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import { Link } from 'react-scroll';

interface CustomDrawerProps {
  open: boolean;
  navBarHeadings: string[];
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const toggleDrawer = (
  open: boolean,
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>,
) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event
      && event.type === 'keydown'
      && ((event as React.KeyboardEvent).key === 'Tab'
        || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

const list = (
  navBarHeadings: string[],
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={() => toggleDrawer(false, setIsDrawerOpen)}
    onKeyDown={toggleDrawer(false, setIsDrawerOpen)}
    component="div"
  >
    <List>
      {navBarHeadings.map((text) => (
        <Link
          onClick={() => {
            setIsDrawerOpen(false);
          }}
          to={text}
          smooth
          duration={1000}
        >
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        </Link>
      ))}
    </List>
  </Box>
);

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  open,
  navBarHeadings,
  setIsDrawerOpen,
}) => (
  <SwipeableDrawer
    anchor="right"
    open={open}
    onClose={toggleDrawer(false, setIsDrawerOpen)}
    onOpen={toggleDrawer(true, setIsDrawerOpen)}
  >
    {list(navBarHeadings, setIsDrawerOpen)}
  </SwipeableDrawer>
);
export default CustomDrawer;
