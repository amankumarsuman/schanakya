import React from "react";
import { PageContainer } from "../pageWrapper/PageContainer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BasicBreadcrumbs from "../breadcrumb/BreadCrumbs";

function Contest() {
  return (
    <>
      <BasicBreadcrumbs second={"Contest"} />

      <PageContainer
        headingText="Contest"
        headingIcon={
          <EmojiEventsIcon sx={{ fontSize: "30px", marginRight: "10px" }} />
        }
      ></PageContainer>
    </>
  );
}

export default Contest;
