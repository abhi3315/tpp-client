import { Avatar, Card, CardContent, Grid, Box, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { green } from '@mui/material/colors';


export const TotalProfit = (props) => (
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
            Highest Package
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            41.4 LPA
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              background: "white",
              height: 74,
              width: 70
            }}
          >
            <EmojiEventsIcon sx={{ fontSize: 60, color: "#fab937" }}/>
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
        <ArrowUpwardIcon sx={{ color: green[500] }}/>
        <Typography
          variant="body2"
          sx={{
            mr: 1,
            ml: 0.4,
            color: green[500]
          }}
        >
          27%
        </Typography>
        <Typography
          sx={{
            mr: 1,
            ml: 9.6,
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
