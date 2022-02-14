import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { green } from '@mui/material/colors';

export const TotalOffers = (props) => (
  <Card {...props}>
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
            Total Offers
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            750+
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
            <AutoGraphIcon sx={{ fontSize: 60, color: green[500] }}/>
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          variant="body2"
          sx={{
            mr: 1,
            ml: 0.4,
            color:"#D14343"
          }}
        >
          8 Offers
        </Typography>
        <Typography
        sx={{
          mr: 1,
          ml: 5.8,
          mt: 0.5,
        }}
          color="textSecondary"
          variant="caption"
        >
          Since last year
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
