import Carousel from "react-bootstrap/Carousel";
import { ImageProps } from "../../pages/HomePage/HomePage";

interface ImageCarouselProps {
  images: Array<ImageProps>;
}
const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <Carousel slide={false}>
      {images.map((image) => {
        return (
          <Carousel.Item>
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
