import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import { green } from '@mui/material/colors';
import SchoolIcon from '@mui/icons-material/School';

export const Budget = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Total Students
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            2000
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              background: "white",
              height: 70,
              width: 70
            }}
          >
            <SchoolIcon sx={{ fontSize: 60 }} color="primary" />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >

            <BadgeIcon sx={{ fontSize: 28, color: green[500] }}/>
        <Typography
          sx={{
            mr: 1,
            ml:1,
            mt: 0.5,
            color : "green",
          }}
          variant="body2"
        >
          2018-2022 Batch
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
