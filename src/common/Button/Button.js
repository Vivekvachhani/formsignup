import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

//Material UI
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';

//style
import useStyles from "./style";

const CommonButton = ({
  btnLabel,
  className,
  addIcon,
  type,
  onClick,
  disable,
  form,
  variant,
}) => {
  const classes = useStyles();
  return (
    <Button
      form={form}
      disabled={disable}
      type={type}
      className={clsx(`${classes.button}`, className)}
      variant={variant}
      onClick={onClick}
    >
      {addIcon && <Add fontSize="small" />} {btnLabel}
    </Button>
  );
};

CommonButton.propTypes = {
  btnLabel: PropTypes.any,
  className: PropTypes.string,
  addIcon: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  form: PropTypes.string,
  variant: PropTypes.string,
};

CommonButton.defaultProps = {
  btnLabel: "Submit",
  className: "",
  addIcon: false,
  type: "submit",
  onClick: () => {},
  disable: false,
  form: "",
  variant: "contained",
};

export default CommonButton;