import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  TableFooter
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

import DetailIcon from 'material-ui-icons/Pageview';
import EditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/DeleteForever';
import AddIcon from 'material-ui-icons/Add';
import PremiumIcon from 'material-ui-icons/ControlPoint';
import NonPremiumIcon from 'material-ui-icons/PanoramaFishEye';

class MerchantList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 5
    };

    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  }

  render() {
    const { page, rowsPerPage } = this.state;
    const { data } = this.props;
    return (
      <Paper style={{ margin: '20px 50px' }}>
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
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(merchant => {
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
                  <TableCell numeric padding="none">
                    <Link to={`/${merchant.id}`}>
                      <Button raised color="primary">
                        {merchant.bids.length} Bids
                        <DetailIcon style={{ marginLeft: '10px' }} />
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`/edit/${merchant.id}`}>
                      <IconButton aria-label="Edit">
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton aria-label="Delete" onClick={() => this.props.deleteMerchant(merchant)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
        <Link to={`/add/`}>
          <Button fab color="accent" aria-label="add" style={{ position: 'fixed', top: '160px', right: '50px' }}>
            <span style={{ position: 'absolute', top: '5px', left: '-114px', color: 'white' }}>Add Merchant</span>
            <AddIcon color="white" />
          </Button>
        </Link>
      </Paper>
    );
  }
};

MerchantList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MerchantList;
