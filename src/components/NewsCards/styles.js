import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  option: {
    textAlign: "center",
  },
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
    fontFamily: "Castoro",
  },
  infoCard: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  },
});
export default styles;
