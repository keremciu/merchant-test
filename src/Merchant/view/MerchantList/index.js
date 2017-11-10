import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/DeleteForever';

const MerchantList = (props) => {
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
              <TableRow key={merchant.id}>
                <TableCell>
                  <Avatar alt={`Avatar of ${name}`} src={merchant.avatarUrl} />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{merchant.email}</TableCell>
                <TableCell numeric>{merchant.phone}</TableCell>
                <TableCell>{merchant.hasPremium ? 'he has premium' : 'he hasnt'}</TableCell>
                <TableCell numeric>{merchant.bids.length}</TableCell>
                <TableCell>
                  <IconButton aria-label="Edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

MerchantList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MerchantList;