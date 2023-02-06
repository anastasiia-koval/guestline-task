import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./DecreaseIncrease.scss";

const DecreaseIncrease = () => {
  const [value, setValue] = useState(0);
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      className="decreaseIncreaseContainer"
    >
      <IconButton onClick={() => setValue(value - 1)} disabled={value === 0}>
        <RemoveIcon />
      </IconButton>
      <Typography>{value}</Typography>
      <IconButton onClick={() => setValue(value + 1)}>
        <AddIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default DecreaseIncrease;
