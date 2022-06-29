import React from "react";
import PropTypes from "prop-types";

//material UI
import { TextField,InputLabel } from '@material-ui/core'
//npm package
import { useField } from "formik";

//style
import useStyles from "./style";

const CustomTextField = ({
  name,
  label,
  multiline,
  rows,
  Required,
  ...rest
}) => {
  const classes = useStyles();
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...rest,
    size: "small",
    multiline: multiline,
    rows: rows,
    className: classes.textField,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <React.Fragment>
      <InputLabel
        required={Required}
        className={classes.inputLabel}
        classes={{
          asterisk: classes.labelAsterisk,
        }}
      >
        {label}
      </InputLabel>
      <TextField
        {...rest}
        className={classes.textField}
        FormHelperTextProps={{
          classes: {
            root: classes.helperText,
          },
        }}
        {...configTextField}
        fullWidth
        multiline={multiline}
        rows={rows}
      />
    </React.Fragment>
  );
};

CustomTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  Required: PropTypes.bool,
  rest: PropTypes.object,
};

CustomTextField.defaultProps = {
  name: "",
  label: "",
  multiline: false,
  Required: false,
  rows: 1,
  rest: {},
};

export default CustomTextField;
