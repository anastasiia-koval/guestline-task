import "./HotelCard.scss";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import RoomCard from "./RoomCard/RoomCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { HotelProps } from "../../interface/HotelInterface";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const HotelCard = (props: HotelProps) => {
  return (
    <div className="card">
      <div className="hotelDetails">
        <ImageCarousel images={props.images} />
        <div className="textContainer">
          <div className="cardHeader">
            <Typography
              variant="h5"
              component="h5"
              sx={{ marginBottom: "10px" }}
            >
              {props.name}
            </Typography>
            <Rating
              name="simple-controlled"
              value={Number(props.starRating)}
              readOnly
            />
          </div>
          {props.address1 && (
            <Typography variant="body1">
              <LocationOnIcon sx={{ color: "#949494" }} />
              {props.address1}
            </Typography>
          )}
          {props.address2 && (
            <Typography variant="body1">
              <LocationOnIcon sx={{ color: "#949494" }} />
              {props.address2}
            </Typography>
          )}
        </div>
      </div>
      {props.rooms?.map((room, index) => {
        return (
          <RoomCard
            key={index}
            roomName={room.name}
            adults={room.occupancy.maxAdults}
            children={room.occupancy.maxChildren}
            longDescription={room.longDescription}
          />
        );
      })}
    </div>
  );
};
export default HotelCard;
