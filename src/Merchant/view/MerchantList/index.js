import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

import EditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/DeleteForever';
import AddIcon from 'material-ui-icons/Add';
import PremiumIcon from 'material-ui-icons/ControlPoint';
import NonPremiumIcon from 'material-ui-icons/PanoramaFishEye';

const MerchantList = props => {
  const { data } = props;
  return (
    <Paper style={{ margin: '50px 50px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>E-Mail Address</TableCell>
            <TableCell numeric>Phone</TableCell>
            <TableCell>Premium</TableCell>
            <TableCell numeric>Bids</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(merchant => {
            const name = `${merchant.firstname} ${merchant.lastname}`;
            return (
              <TableRow hover key={merchant.id}>
                <TableCell>
                  <Avatar alt={`Avatar of ${name}`} src={merchant.avatarUrl} />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{merchant.email}</TableCell>
                <TableCell numeric>{merchant.phone}</TableCell>
                <TableCell>
                  {merchant.hasPremium ? <PremiumIcon /> : <NonPremiumIcon />}
                </TableCell>
                <TableCell numeric>{merchant.bids.length}</TableCell>
                <TableCell>
                  <Link to={`/edit/${merchant.id}`}>
                    <IconButton aria-label="Edit">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Button fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: '50px', right: '50px' }}>
        <Link to={`/add/`}>
          <AddIcon />
        </Link>
      </Button>
    </Paper>
  );
};

MerchantList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MerchantList;
