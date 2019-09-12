import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Toolbar, { styles as toolbarStyles } from './Toolbar';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftTypographyActive: {
    color: theme.palette.common.black,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightTypography: {
    fontSize: 16,
    color: theme.palette.common.black,
    marginLeft: theme.spacing.unit * 3,
  },
  TypographySecondary: {
    color: '#ff3366',
  },
  topBar: {
    zIndex: 10,
    transition: 'top 1s'
  }
});

class TopBar extends React.Component {
  constructor() {
    super();
    this.state = {
      previousScrollPosition: typeof window !== 'undefined' && window.pageYOffset,
      visible: true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const {previousScrollPosition} = this.state;
    const currentScrollPosition = typeof window !== 'undefined' && window.pageYOffset;
    const visible = previousScrollPosition > currentScrollPosition;
    this.setState({
      previousScrollPosition: currentScrollPosition,
      visible
    });
  }

  render() {
    const { classes } = this.props;
    const appBarTopPosition = this.state.visible ? 0 : -70;
    return (
      <div>
        <AppBar className={classes.topBar} style={{top: appBarTopPosition}} position="fixed" elevation={0} color={'primary'}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.left} id={'left-space'} />
            <Link
              variant="h6"
              color="inherit"
              className={classes.title}
              underline={'none'}
              id={'title'}
            >
              {'PUSHKARA PHOTOGRAPHY'}
            </Link>
            <div className={classes.right}>
              <Link
                color="inherit"
                variant="h6"
                underline={'none'}
                className={classes.rightTypography}
                href="/"
              >
                <Button color={'default'}>{'Home'}</Button>
              </Link>
              <Link
                variant="h6"
                underline={'none'}
                className={classNames(classes.rightTypography, classes.TypographySecondary)}
                href="/about"
              >
                <Button color={'secondary'}>{'About Me'}</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.placeholder} />
      </div>
    );
  }
}

export default withStyles(styles)(TopBar);