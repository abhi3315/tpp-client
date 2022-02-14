import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { TotalStudents } from './components/dashboard/total-students';
import { CompanyDrives} from './components/dashboard/company-drives';
import { StudentDoubts } from './components/dashboard/student-doubts';
import { CampusRecruiters } from './components/dashboard/campus-recruiters';
import { TotalPlaced } from './components/dashboard/total-placed';
import { TotalOffers } from './components/dashboard/total-offers';
import { HighestPackage} from './components/dashboard/highest-package';
import { DepartmentPlacement } from './components/dashboard/department-placement';
import { DashboardLayout } from './components/dashboard-layout';

const StuDash = () => (
  <>
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalStudents />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalOffers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalPlaced />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <HighestPackage sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <CampusRecruiters />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <DepartmentPlacement sx={{ height: '100%' }} />
          </Grid>
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid> */}
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <CompanyDrives />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <StudentDoubts sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

StuDash.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
)

export default StuDash;

