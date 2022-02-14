import { formatDistanceToNow, subHours } from 'date-fns';
import { styled } from '@mui/material/styles';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const products = [
  {
    id: uuid(),
    student_name: 'Ssomya Saxena',
    doubt: 'Hi there! I am wondering if I can sit in more than one mass-recruiter drives?',
    duration_ago: '10m'
  },
  {
    id: uuid(),
    student_name: 'Abhishek Kumar',
    doubt: 'Can you please explain how to fill XYZ registration form.',
    duration_ago: '30m'
  },
  {
    id: uuid(),
    student_name: 'Surbhi Rathi',
    doubt: 'Will I be granted placement attendance for off-campus drives?',
    duration_ago: '1hr'
  },
  {
    id: uuid(),
    student_name: 'Gia Sharma',
    doubt: 'Hi there! I am wondering if I can sit in more than one mass-recruiter drives?',
    duration_ago: '2d'
  }
];

const VMButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#FAB937'),
  backgroundColor: '#FAB937',
  '&:hover': {
    backgroundColor: '#E3E3E3',
  },
}));

export const StudentDoubts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Student Doubts"
    />
    <Divider />
    <List> 
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemText
            sx={{ color: '#1976D2', fontWeight: 'h5' }}
            primary={product.doubt}
            secondary={`${product.student_name} • ${product.duration_ago}`}
          />
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <VMButton
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="container"
      >
        View more
      </VMButton>
    </Box>
  </Card>
);
