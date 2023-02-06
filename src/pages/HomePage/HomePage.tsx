import axios from "axios";
import { useEffect, useState } from "react";
import { Filter, HotelCard } from "../../components";
import "./HomePage.scss";
import { HotelProps } from "../../interface/HotelInterface";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const HomePage = () => {
  const [hotelData, setHotelData] = useState<Array<HotelProps>>();
  const [hotelRate, setHotelRate] = useState<number | null>(0);
  const [maxChildren, setChildrenAmount] = useState<number>(0);
  const [maxAdult, setAdultAmount] = useState<number>(0);

  useEffect(() => {
    getAllHotels();
  }, []);

  let getAllHotels = async () => {
    const res = await axios.get(
      `https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG`
    );
    let allHotels = res.data;

    await Promise.all(
      allHotels.map((hotel: any) => {
        return axios
          .get(
            `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotel.id}`
          )
          .then((res) => (hotel.rooms = res.data.rooms));
      })
    );
    setHotelData(allHotels);
  };

  const filteredbyRateHotels =
    hotelRate && hotelRate > 0
      ? hotelData?.filter((hotel) => hotelRate <= Number(hotel.starRating))
      : hotelData;

  const filteredByHotelCapacity = filteredbyRateHotels
    ?.map(({ rooms, ...others }) => {
      const filteredRooms = rooms.filter(
        (room) =>
          maxAdult <= room.occupancy.maxAdults &&
          maxChildren <= room.occupancy.maxChildren
      );
      return { rooms: filteredRooms, ...others };
    })
    .filter((hotel) =>
      hotel.rooms.some(
        (room) =>
          maxAdult <= room.occupancy.maxAdults &&
          maxChildren <= room.occupancy.maxChildren
      )
    );

  const resetFilter = () => {
    setHotelRate(0);
    setChildrenAmount(0);
    setAdultAmount(0);
  };

  if (!hotelData) {
    return (
      <div className="homePage">
        <CircularProgress />
      </div>
    );
  }
  return (
    <>
      <header>
        <img
          src="./main-photo.jpg"
          style={{ objectFit: "cover", width: "100%", height: "300px" }}
          alt="mainPhoto"
        />
        <Filter
          setHotelRate={setHotelRate}
          hotelRate={hotelRate}
          maxChildren={maxChildren}
          setChildrenAmount={setChildrenAmount}
          setAdultAmount={setAdultAmount}
          maxAdult={maxAdult}
          reset={resetFilter}
        />
      </header>

      <div className="cardsContainer">
        {filteredByHotelCapacity && filteredByHotelCapacity?.length > 0 ? (
          filteredByHotelCapacity?.map((hotel) => {
            return (
              <HotelCard
                key={hotel.id}
                id={hotel.id}
                name={hotel.name}
                images={hotel.images}
                address1={hotel.address1}
                address2={hotel.address2}
                starRating={hotel.starRating}
                rooms={hotel.rooms}
              />
            );
          })
        ) : (
          <Typography variant="h6">
            Ooops, there is no hotels with such requirements :(
          </Typography>
        )}
      </div>
    </>
  );
};

export default HomePage;
