import carousel1 from "../../../../assets/carousel1.png";
import carousel3 from "../../../../assets/carousel3.png";
import carousel2 from "../../../../assets/carousel2.png";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
export default function Carousel() {
  return (
    <>
      <CCarousel
        indicators
        controls
        transition="crossfade"
        className="carousel"
      >
        <CCarouselItem>
          <CImage className="d-md-block w-90" src={carousel1} alt="slide 1" />
        </CCarouselItem>

        <CCarouselItem>
          <CImage className="d-md-block w-90" src={carousel2} alt="slide 2" />
        </CCarouselItem>

        <CCarouselItem>
          <CImage className="d-md-block w-90" src={carousel3} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
    </>
  );
}
