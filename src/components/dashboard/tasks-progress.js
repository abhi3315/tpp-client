import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import PeopleIcon from '@mui/icons-material/People';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const TasksProgress = (props) => (
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
            Total Placed
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            90%
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              background: "white",
              height: 80,
              width: 70
            }}
          >
            <PeopleIcon sx={{ fontSize: 70, color: red[400] }}/>
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 1.2
        }}
      >
        <ArrowUpwardIcon sx={{ color: green[500] }}/>
        <Typography
          variant="body2"
          sx={{
            mr: 1,
            ml: 0.4,
            color: green[500]
          }}
        >
          5%
        </Typography>
        <Typography
          sx={{
            mr: 1,
            ml: 8.6,
            mt: 0.5,
          }}
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
      {/* <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={75.5}
          variant="determinate"
        />
      </Box> */}
    </CardContent>
  </Card>
);
