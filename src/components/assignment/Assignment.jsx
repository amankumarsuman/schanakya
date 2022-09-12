import React from "react";
import { PageContainer } from "../pageWrapper/PageContainer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BasicBreadcrumbs from "../breadcrumb/BreadCrumbs";

function Assignment() {
  return (
    <>
      <BasicBreadcrumbs second={"Assignment"} />

      <PageContainer
        headingText="Assignment"
        headingIcon={
          <AssignmentIcon sx={{ fontSize: "30px", marginRight: "10px" }} />
        }
      ></PageContainer>
    </>
  );
}

export default Assignment;
