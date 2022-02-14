import { makeStyles } from "@material-ui/core/styles"
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Divider,
  Typography,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../../severity-pill';

const orders = [
  {
    id: uuid(),
    ref: 'CD22049',
    amount: '41.4 LPA',
    customer: {
      name: 'Amazon'
    },
    createdAt: 1555016400000,
    status: 'applied'
  },
  {
    id: uuid(),
    ref: 'CD22048',
    amount: '13.5 LPA',
    customer: {
      name: 'Kronos'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CD22047',
    amount: '15 LPA',
    customer: {
      name: 'Ion'
    },
    createdAt: 1554930000000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CD22046',
    amount: '7.5 LPA',
    customer: {
      name: 'Optum'
    },
    createdAt: 1554757200000,
    status: 'applied'
  },
  {
    id: uuid(),
    ref: 'CD22045',
    amount: '4.25 LPA',
    customer: {
      name: 'Capgemini'
    },
    createdAt: 1554670800000,
    status: 'applied'
  }
  // {
  //   id: uuid(),
  //   ref: 'CD22044',
  //   amount: '13 LPA',
  //   customer: {
  //     name: 'RTS Wordpress'
  //   },
  //   createdAt: 1554670800000,
  //   status: 'pending'
  // }
];

// const useStyles = makeStyles({
//   tableHeading: {
//     fontWeight: 'bold'
//   },
// });

const VAButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#FAB937'),
  backgroundColor: '#FAB937',
  '&:hover': {
    backgroundColor: '#E3E3E3',
  },
}));

export const CompanyDrives = (props) => {

  return (
    <Card {...props}>
      <CardHeader title="Company Drives" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 700 }}>
          <Table>
            <TableHead>
              <TableRow sx={{
                background: "#e3e3e3"
              }}>
                <TableCell sx={{
                  fontWeight: "bold"
                }}>
                  COMPANY ID
                </TableCell>
                <TableCell sx={{
                  fontWeight: "bold"
                }}>
                  COMPANY NAME
                </TableCell>
                <TableCell sx={{
                  fontWeight: "bold"
                }}>
                  PACKAGE (CTC)
                </TableCell>
                <TableCell sx={{
                  fontWeight: "bold"
                }}>
                  STATUS
                </TableCell>
                <TableCell sx={{
                  fontWeight: "bold"
                }}>
                  ACTION
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell sx={{fontSize: '1.1em'}}>
                    {order.ref}
                  </TableCell>
                  <TableCell
                    sx={{
                      pl: 2.5,
                      fontSize: '1.1em'
                    }}
                  >
                    {order.customer.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      pl: 2.5,
                      fontSize: '1em'
                    }}
                  >
                    {order.amount}
                  </TableCell>
                  <TableCell>
                    <SeverityPill
                      color={(order.status === 'applied' && 'success')
                        // || (order.status === 'refunded' && 'error')
                        || 'error'}
                    >
                      {order.status}
                    </SeverityPill>
                  </TableCell>
                  <TableCell sx={{
                    alignItems: 'center'
                  }}>
                    <Button
                      variant="contained" disableElevation>Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <VAButton
          color="secondary"
          fontWeight="bold"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="container"
        >
          View All
        </VAButton>
      </Box>
    </Card>
  )
};
