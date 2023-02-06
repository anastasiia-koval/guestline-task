import Typography from "@mui/material/Typography";
import "./RoomCard.scss";

interface RoomCardProps {
  roomName: string;
  adults: number;
  children: number;
  longDescription: string;
}

const RoomCard = (props: RoomCardProps) => {
  return (
    <div className="roomCard">
      <div className="roomDetails">
        <Typography variant="h6" component="h6" sx={{ textAlign: "start" }}>
          {props.roomName}
        </Typography>
        <Typography variant="body1">Adults: {props.adults}</Typography>
        <Typography variant="body1">Children: {props.children}</Typography>
      </div>
      <Typography variant="body1" className="description">
        {props.longDescription}
      </Typography>
    </div>
  );
};

export default RoomCard;
