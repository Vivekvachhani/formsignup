import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    "&.MuiButton-root": {
      textTransform: "capitalize",
      marginLeft: theme.spacing(1),
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "0.625rem",
      boxShadow: theme.shadows,
      fontWeight: theme.typography.fontWeightBold,
      textAlign: "center",
      fontSize: theme.typography.button,
      cursor: "pointer",
      "& .MuiSvgIcon-root": {
        marginRight: theme.spacing(1),
      },
    },
    "&.MuiButton-root:hover": {
      background: theme.palette.primary.main,
      boxShadow: "none",
    },
  },
}));

export default useStyles;