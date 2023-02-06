export interface HotelProps {
  id: string;
  name: string;
  images: Array<ImageProps>;
  address1: string;
  address2: string;
  starRating: string;
  rooms: Array<RoomsProps>;
}

export interface RoomsProps {
  id: string;
  name: string;
  longDescription: string;
  occupancy: OccupancyProps;
}
export interface ImageProps {
  url: string;
}

export interface OccupancyProps {
  maxAdults: number;
  maxChildren: number;
}
