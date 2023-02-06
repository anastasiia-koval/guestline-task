import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import DecreaseIncrease from "../DecreaseIncrease/DecreaseIncrease";
import "./Filter.scss";

interface FilterProps {
  hotelRate: number | null;
  setHotelRate: React.Dispatch<React.SetStateAction<number | null>>;
  // increaseOccupancy: () => void;
}

const Filter = (props: FilterProps) => {
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
        <DecreaseIncrease />
      </div>
      <div className="buttonGroup">
        <Typography>Children:</Typography>
        <DecreaseIncrease />
      </div>
    </div>
  );
};

export default Filter;
