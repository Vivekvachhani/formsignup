// Material UI
import { makeStyles } from "@mui/styles";
// Internal
// import { LandingPageBG } from "../../utils/images";  

const useStyle = makeStyles((theme) => {
  return {
    loginFormMain: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    //   backgroundImage: `url(${LandingPageBG})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    loginForm: {
      flexGrow: 1,
      background: theme.palette.background.default,
      padding: theme.spacing(4),
      borderRadius: "25px",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      "& .MuiInputLabel-root": {
        fontWeight: theme.typography.h5.fontWeight,
        fontSize: theme.typography.pxToRem(14),
        color: theme.palette.common.black,
      },
    },
    avatarLogo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    loginBtn: {
      "&.MuiButton-root": {
        marginTop: theme.spacing(2),
        boxShadow: "none",
        marginLeft: theme.spacing(0),
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
  };
});

export default useStyle;