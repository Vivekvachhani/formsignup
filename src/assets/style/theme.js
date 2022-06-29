import { createTheme } from '@material-ui/core/styles';
import { BorderColor } from '@material-ui/icons';


const theme = createTheme({
  palette: {
    primary: {
        main: "#3e79f7",
        default: "#1a3353", // color of card title
      },

      secondary: {
        main: "rgb(69, 85, 96)",
        default: "rgba(114,132,154,.7)",
      },

      common: {
        subTitleColor: "#666c6e", //color of card subtitle
        labelColor: "#00000099", //label color of Input Field
        borderColor: "#e0e0e0",
        previewBorder: "#bdbdbd",
        viewBtnBorder: "#e6ebf1",
      },

      action: {
        hover: "#699dff",
        hoverOpacity: 0.8,
      },
    },

    typography: {
      h5: {
        fontWeight: 700, // title font style
        fontSize: "1.0679rem",
      },
    },
    error:{
        main:"#d32f2f"
    }
  }
);
export default theme