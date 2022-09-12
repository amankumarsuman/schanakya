import React from "react";
import { PageContainer } from "../pageWrapper/PageContainer";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import BasicBreadcrumbs from "../breadcrumb/BreadCrumbs";
import { Button, Grid, TextField } from "@mui/material";
import FullWidthTabs from "../tabs/Tabs";

function Lecture() {
  return (
    <>
      <BasicBreadcrumbs second={"Lecture"} />

      <PageContainer
        headingText="Lecture"
        headingIcon={
          <PlayCircleOutlineIcon
            sx={{ fontSize: "30px", marginRight: "10px" }}
          />
        }
      >
        <Grid
          sx={{ marginTop: "30px", marginBottom: "50px" }}
          container
          spacing={2}
        >
          <Grid item xs={3} sm={6} md={4} lg={3}>
            <TextField label="Search By Title" variant="outlined" />
          </Grid>
          <Grid item xs={3} sm={6} md={4} lg={3}>
            <TextField label="Select Instructor" variant="outlined" />
          </Grid>
          <Grid item xs={3} sm={6} md={4} lg={3}>
            <TextField type="date" variant="outlined" />
          </Grid>
          <Grid item xs={3} sm={6} md={4} lg={3}>
            <Button variant="contained">Apply</Button>
          </Grid>
        </Grid>

        <FullWidthTabs />
      </PageContainer>
    </>
  );
}

export default Lecture;
