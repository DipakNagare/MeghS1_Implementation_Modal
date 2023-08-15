// import { useState } from "react";
// import RequestsHandlers from "./RequestsHandlers"

// const CarouselTypeHandler = (globalContextState,dynamicContextState,lang) => {
//     const [carouselcurrentIndex, setCarouselcurrentIndex] = useState(0);
//     const { requestHadlers } = RequestsHandlers()
//     const Carouselimages = [
//         `${globalContextState.server.uploads}/files/download/${dynamicContextState[lang].Carousel_img1.link}`,
//         `${globalContextState.server.uploads}/files/download/${dynamicContextState[lang].Carousel_img2.link}`,
//         `${globalContextState.server.uploads}/files/download/${dynamicContextState[lang].Carousel_img3.link}`,
//         `${globalContextState.server.uploads}/files/download/${dynamicContextState[lang].Carousel_img4.link}`,
//         `${globalContextState.server.uploads}/files/download/${dynamicContextState[lang].Carousel_img5.link}`,
//     ];

//     const previousSlide = () => {
//         const newIndex = (carouselcurrentIndex === 0) ? Carouselimages.length - 1 : carouselcurrentIndex - 1;
//         setCarouselcurrentIndex(newIndex);
//     };

//     const nextSlide = () => {
//         const newIndex = (carouselcurrentIndex === Carouselimages.length - 1) ? 0 : carouselcurrentIndex + 1;
//         setCarouselcurrentIndex(newIndex);
//     };

//     const carouselTypeHandler ={
//         previousSlide,
//         nextSlide,
//         Carouselimages
//     }
 
//     return{ carouselTypeHandler }

// }

// export default CarouselTypeHandler