import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import "./DecreaseIncrease.scss";

interface DecreaseIncreaseProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}
const DecreaseIncrease = (props: DecreaseIncreaseProps) => {
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      className="decreaseIncreaseContainer"
    >
      <IconButton
        onClick={() => props.setValue(props.value - 1)}
        disabled={props.value === 0}
      >
        <RemoveIcon />
      </IconButton>
      <Typography>{props.value}</Typography>
      <IconButton onClick={() => props.setValue(props.value + 1)}>
        <AddIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default DecreaseIncrease;
