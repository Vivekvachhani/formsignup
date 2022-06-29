import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  helperText: {
    "&.MuiFormHelperText-root": {
      lineHeight: 0.66,
      marginLeft: theme.spacing(0),
    },
  },
  inputLabel: {
    "&.MuiInputLabel-root": {
      marginTop: theme.spacing(2),
      color: theme.palette.primary.default,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14),
      fontVariant: "tabular-nums",
      fontFeatureSettings: "tnum",
    },
  },
  labelAsterisk: {
    color: theme.error.main,
  },
  textField: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      fontSize: theme.typography.pxToRem(10),
      borderColor: theme.borderColor,
      borderRadius: 10,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
}));
export default useStyle;