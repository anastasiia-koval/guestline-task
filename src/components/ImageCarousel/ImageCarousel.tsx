import Carousel from "react-bootstrap/Carousel";
import { ImageProps } from "../../interface/HotelInterface";

interface ImageCarouselProps {
  images: Array<ImageProps>;
}
const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <Carousel slide={false} interval={null}>
      {images.map((image, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              alt="hotel"
              src={image.url}
              className="hotelImage"
              style={{ width: "350px", height: "250px" }}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
