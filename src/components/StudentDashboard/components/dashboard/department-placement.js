import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import { createTheme, makeStyles, ThemeProvider, useTheme } from "@material-ui/core/styles";
import { Box, Button, Card, CardContent, CardHeader, Divider, LinearProgress, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// const custom_theme = createTheme({
//   palette: {
//     primary: {
//       main: '#fab937',
//     },
//     secondary: {
//       main: '#4caf50',
//     },
//     info: {
//       main: '#1976d2',
//     },
//     error: {
//       main: '#ef5350',
//     },
//   },
// });

function LinearProgressWithLabel(props) {
  // const classes = useStyles();
  return (
    // <ThemeProvider theme={custom_theme}>
    <Box display="flex" alignItems="center">
      <Box height="100%" width="100%" mr={1}>
        <LinearProgress sx={{ height: '14px', borderRadius: '1em' }} variant="determinate" {...props} />
      </Box>
      <Box minWidth={10}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
    // </ThemeProvider>
  );
}

// const styles = props => ({
//   colorPrimary: {
//     backgroundColor: '#00695C',
//   },
//   barColorPrimary: {
//     backgroundColor: '#B2DFDB',
//   }
// });

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired
};

// const useStyles = makeStyles({
//   root: {
//     width: "100%"
//   },
//   golden: {
//     color: custom_theme.palette.primary.main,
//   }
// });


const VMButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#FAB937'),
  backgroundColor: '#FAB937',
  '&:hover': {
    backgroundColor: '#E3E3E3',
  },
}));

const FPBBox = styled(LinearProgress)(({ theme }) => ({
  color: '#ffffff'
}));


export const DepartmentPlacement = (props) => {

  const theme = useTheme();
  // const SPBColor = theme.palette['secondary'].light;

  const [bar1, setBar1] = useState(90);
  const [bar2, setBar2] = useState(80);
  const [bar3, setBar3] = useState(70);
  const [bar4, setBar4] = useState(50);
  const [bar5, setBar5] = useState(40);

  // const classes = useStyles();
  // const SeverityPillRoot = styled('span')(({ theme, ownerState }) => {
  // const FPBColor = theme.palette[props.ownerState.color].light;
  // });

  return (
    <ThemeProvider theme={theme}>
    <Card {...props}>
      <CardHeader sx={{ justify: 'center' }} title="Department-Wise Placement" />
      <Divider />
      <CardContent>
        <Box>
          <Box mt={1} mb={1.8}>
            <Typography
              sx={{ color: '#666666' }}
              variant='subtitle1'
            >
              Computer Science and Engineering
            </Typography>
            <Box>
              <LinearProgressWithLabel value={bar1} />
            </Box>
          </Box>
          <Box my={1.8}>
            <Typography
              sx={{ color: '#666666' }}
              variant='subtitle1'
            >
              Information Technology Engineering
            </Typography>
            <LinearProgressWithLabel value={bar2} />
          </Box>
          <Box my={1.8}>
            <Typography
              sx={{ color: '#666666' }}
              variant='subtitle1'
            >
              Electronics Engineering
            </Typography>
            <LinearProgressWithLabel color="info" value={bar3} />
          </Box>
          <Box my={1.8}>
            <Typography
              sx={{ color: '#666666' }}
              variant='subtitle1'
            >
              Masters of Business Administration
            </Typography>
            <LinearProgressWithLabel color="info" value={bar4} />
          </Box>
          <Box my={1.8}>
            <Typography
              sx={{ color: '#666666' }}
              variant='subtitle1'
            >
              Bachelor of Pharmacy
            </Typography>
            <LinearProgressWithLabel color="info" value={bar5} />
          </Box>
          <Divider />
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            pt: 2
          }}>
            <VMButton
              color="primary"
              endIcon={<ArrowRightIcon />}
              size="small"
              variant="container"
            >
              View all
            </VMButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
    </ThemeProvider>
  );
};
