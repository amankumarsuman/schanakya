import React from "react";
import QuizIcon from "@mui/icons-material/Quiz";
import { PageContainer } from "../pageWrapper/PageContainer";
import BasicBreadcrumbs from "../breadcrumb/BreadCrumbs";

function Quiz() {
  return (
    <>
      <BasicBreadcrumbs second={"Quiz"} />

      <PageContainer
        headingText="Quiz"
        headingIcon={
          <QuizIcon sx={{ fontSize: "30px", marginRight: "10px" }} />
        }
      ></PageContainer>
    </>
  );
}

export default Quiz;
