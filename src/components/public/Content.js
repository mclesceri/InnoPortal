import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing.unit,
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(jobName, closeDate, location, positionsOpen, sharedToday, postedBy) {
  id += 1;
  return { id, jobName, closeDate, location, positionsOpen, sharedToday, postedBy };
}

const rows = [
  createData('RadTech', 'April', 'Idaho Falls, ID', 24, 4.0),
  createData('Chemical Engineer', 'May', 'Idaho Falls, ID', 37, 4.3),
  createData('Project Manager', 'April', 'Richland, WA', 24, 6.0),
  createData('Administrative Assistant', 'May', 'Richland, WA', 67, 4.3),
  createData('Secretary', 'April', 'Idaho Falls, ID', 49, 3.9),
];

function Content(props) {

  const { classes } = props;

  return (
    <div>
      <div>
        <h2>Available Jobs</h2>
      </div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Job Title</TableCell>
              <TableCell align="center">Close Date</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center"># of Positions Open</TableCell>
              <TableCell align="center">Shared Today</TableCell>
              <TableCell align="center">Posted By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.jobName}
                </TableCell>
                <TableCell align="center">{row.closeDate}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.positionsOpen}</TableCell>
                <TableCell align="center">{row.sharedToday}</TableCell>
                <TableCell align="center">{row.postedBy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
