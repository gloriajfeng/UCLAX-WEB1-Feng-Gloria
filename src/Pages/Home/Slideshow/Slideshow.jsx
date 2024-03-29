import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//data
import { slidesData } from "./slidesData";

//component
import Slide from "./Slide";

const Slideshow = () => {
    return (
        <SlideshowStyled>
            <Carousel infiniteLoop={true} autoPlay={true}>
                {slidesData.map((slide) => {
                    return <Slide slide={slide} />;
                })}
            </Carousel>
        </SlideshowStyled>
    );
};

export default Slideshow;

const SlideshowStyled = styled.div`
    .carousel .slide .legend {
        background-color: white;

        text-align: center;
        color: black;
    }

    .carousel .control-dots .dot {
        width: 20px;
        height: 20px;
    }
`;
