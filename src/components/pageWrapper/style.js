import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  container: {
    border: "1px solid transparent",
  },

  mainDiv: {
    margin: "auto",
    marginTop: "2%",
    marginBottom: "5em",
  },
  mainDivLocal: {
    margin: "auto",
  },
  headingDiv: {
    background: "#BEDAF4",
    margin: "auto",
    padding: "1% 0%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 5px #888888",
  },
  headingDivChild: {
    width: "fixed",
    display: "flex",
    justifyContent: "space-between",
  },
  headingIcon: {
    fontSize: "30px",
  },
  headingText: {
    fontSize: "30px",
    fontWeight: "700",
    marginTop: "-10px",
  },
  headingTextViewOnly: {
    fontSize: "10px",
    fontWeight: "500",
    marginTop: "-5px",
    color: "white",
    background: "#ff0000ad",
    height: "fit-content",
    padding: "2px 5px",
    borderRadius: "5px",
  },
  formBackgroundParent: {
    // width: "100%",
    // height: "70vh",
    overflow: "hidden",
  },
  formBackgroundChild: {
    // width: "100%",
    // height: "100%",
    // overflowY: "scroll",
    // overflowY: "hidden",
    // border: "1px solid red",
    margin: "auto",
    marginLeft: "50px",
    paddingLeft: "20px",
    marginRight: "-108px" /* Maximum width of scrollbar */,
    paddingRight: "180px" /* Maximum width of scrollbar */,
  },
}));
