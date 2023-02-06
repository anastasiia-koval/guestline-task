import axios from "axios";
import { useEffect, useState } from "react";
import { Filter, HotelCard } from "../../components";
import "./HomePage.scss";

export interface HotelProps {
  id: string;
  name: string;
  images: Array<ImageProps>;
  address1: string;
  address2: string;
  starRating: string;
  rooms: Array<any>;
  occupancy: OccupancyProps;
}

export interface ImageProps {
  url: string;
}

export interface OccupancyProps {
  maxAdults: number;
  maxChildren: number;
}

const HomePage = () => {
  const [hotelData, setHotelData] = useState<Array<HotelProps>>();
  const [hotelRate, setHotelRate] = useState<number | null>(0);
  const [maxChildren, setChildrenAmount] = useState<number>(0);
  const [maxAdult, setAdultAmount] = useState<number>(0);

  console.log(hotelData);
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

  const filteredByCapacityHotels =
    (maxAdult && maxAdult > 0) || (maxChildren && maxChildren > 0)
      ? filteredbyRateHotels?.filter(
          (hotel) =>
            maxAdult &&
            maxAdult <= hotel.occupancy.maxAdults &&
            maxChildren &&
            maxChildren <= hotel.occupancy.maxChildren
        )
      : filteredbyRateHotels;

  const resetFilter = () => {};
  return (
    <>
      <header>
        <img
          src="./main-photo.jpg"
          style={{ objectFit: "cover", width: "100%", height: "300px" }}
          alt="mainPhoto"
        />
        <Filter setHotelRate={setHotelRate} hotelRate={hotelRate} />
      </header>

      <div className="cardsContainer">
        {filteredByCapacityHotels?.map((hotel) => {
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
        })}
      </div>
    </>
  );
};

export default HomePage;
