import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <SupervisedUserCircleIcon />
        </ListItemIcon>
        <ListItemText primary="User Home" />
      </ListItem>
    </Link>
    <Link to="/admin" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Admin Dashboard" />
      </ListItem>
    </Link>
    <Link to="/admin/members" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <VerifiedUserIcon />
        </ListItemIcon>
        <ListItemText primary="Members" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Jobs" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ThumbUpIcon />
      </ListItemIcon>
      <ListItemText primary="Social Shares" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
