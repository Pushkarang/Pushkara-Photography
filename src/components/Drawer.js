import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail'
import Drawer from "@material-ui/core/Drawer";
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    zIndex: 1,
    position: "relative",
    overflow: "hidden",
  },
  drawer: {
    width: theme.layout.drawerWidth
  },
  drawerPaper: {
    width: "inherit",
    paddingTop: 20 
  },
  appContent: theme.mixins.gutters({
    flex: '1 1 100%',  
    maxWidth: '100%', 
    margin: '0 auto',
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.lg,
    },
  })
});

function App(props) {
  const { classes, children } = props;
  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />      </Drawer>
      <main className={classes.appContent}>
        {children}
      </main>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(App);
