import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import DecreaseIncrease from "../DecreaseIncrease/DecreaseIncrease";
import "./Filter.scss";

interface FilterProps {
  hotelRate: number | null;
  setHotelRate: React.Dispatch<React.SetStateAction<number | null>>;
  reset: () => void;
  maxChildren: number;
  maxAdult: number;
  setChildrenAmount: React.Dispatch<React.SetStateAction<number>>;
  setAdultAmount: React.Dispatch<React.SetStateAction<number>>;
}

const Filter = (props: FilterProps) => {
  const isFiltered =
    (props.hotelRate && props.hotelRate > 0) ||
    props.maxAdult > 0 ||
    props.maxChildren > 0;
  return (
    <div className="filterContainer">
      <Rating
        name="controlledRating"
        value={props.hotelRate}
        onChange={(event, newValue) => {
          props.setHotelRate(newValue);
        }}
      />
      <div className="buttonGroup">
        <Typography>Adults:</Typography>
        <DecreaseIncrease
          value={props.maxAdult}
          setValue={props.setAdultAmount}
        />
      </div>
      <div className="buttonGroup">
        <Typography>Children:</Typography>
        <DecreaseIncrease
          value={props.maxChildren}
          setValue={props.setChildrenAmount}
        />
      </div>
      {isFiltered && (
        <Button variant="text" onClick={() => props.reset()}>
          Reset
        </Button>
      )}
    </div>
  );
};

export default Filter;
