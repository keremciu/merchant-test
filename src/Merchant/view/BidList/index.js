import React from 'react';
import PropTypes from 'prop-types';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const BidList = props => {
  const { data } = props;
  return (
    <Paper style={{ margin: '50px 50px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Car Title</TableCell>
            <TableCell numeric>Amount</TableCell>
            <TableCell numeric>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(bid => {
            return (
              <TableRow hover key={bid.id}>
                <TableCell>{bid.id}</TableCell>
                <TableCell>{bid.carTitle}</TableCell>
                <TableCell numeric>€ {bid.amount}</TableCell>
                <TableCell numeric>{new Date(bid.created).toLocaleString()}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

BidList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BidList;
