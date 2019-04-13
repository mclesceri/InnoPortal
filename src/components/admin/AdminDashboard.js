import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AdminActiveJobs from './AdminActiveJobs';
import AdminInactiveJobs from './AdminInactiveJobs';
import AdminDashboardLeftDrawer from './AdminDashboardLeftDrawer';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
  logo: {
    width: '80%',
    height: 'auto',
  },
});

class AdminDashboard extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AdminDashboardLeftDrawer />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2">
            Active Jobs
          </Typography>
          <div className={classes.tableContainer}>
            <AdminActiveJobs />
          </div>

          <Typography variant="h4" gutterBottom component="h2">
            Inactive Jobs
          </Typography>
          <div className={classes.tableContainer}>
            <AdminInactiveJobs />
          </div>
        </main>
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminDashboard);
