import React, { useState } from 'react';
const carouselContainer = {
    width: "100%",
    position: "relative",
    height: "400px"
}
const customButtton = {
    padding: "10px 80px",
    fontSize: "16px"
}

const Carousel = ({ dynamicContextState, globalContextState, fileTypeHandlers, lang }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        `${globalContextState.server.uploads}/files/download/${dynamicContextState[lang].carousel_img1.link}/bypassed`,
        `${globalContextState.server.uploads}/files/download/${dynamicContextState[lang].carousel_img2.link}/bypassed`,
        `${globalContextState.server.uploads}/files/download/${dynamicContextState[lang].carousel_img3.link}/bypassed`,
        `${globalContextState.server.uploads}/files/download/${dynamicContextState[lang].carousel_img4.link}/bypassed`,
        `${globalContextState.server.uploads}/files/download/${dynamicContextState[lang].carousel_img5.link}/bypassed`,
    ];

    const previousSlide = () => {
        const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="mt-3">
            <div id="carouselExampleControls" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                            <div>
                                <img src={image} style={carouselContainer} alt="" />
                            </div>
                            <div className='has-text-centered   '>
                                {globalContextState.editMode && <button className="button mt-3 ml-auto mr-auto is-small is-info" style={customButtton} onClick={() => { fileTypeHandlers.fileTypeModalUpdateHandler(`carousel_img${index + 1}`) }}>
                                    <i className="fa-solid fa-pen"> {index + 1} </i>
                                </button>}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" onClick={previousSlide}>
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={nextSlide}>
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </div>
    );
};
export default Carousel

{/* <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div>
                <img src={`${globalContextState.server.uploads}/files/download/${dynamicContextState.eng.Carousel_img1.link}`} style={carouselContainer} alt="" />
            </div>
        </div>
        <div>
            <img src={`${globalContextState.server.uploads}/files/download/${dynamicContextState.eng.Carousel_img2.link}`} style={carouselContainer} alt="" />
        </div>
        <div>
            <img src={`${globalContextState.server.uploads}/files/download/${dynamicContextState.eng.Carousel_img3.link}`} style={carouselContainer} alt="" />
        </div>
        <div>
            <img src={`${globalContextState.server.uploads}/files/download/${dynamicContextState.eng.Carousel_img4.link}`} style={carouselContainer} alt="" />
        </div>
        <div>
            <img src={`${globalContextState.server.uploads}/files/download/${dynamicContextState.eng.Carousel_img5.link}`} style={carouselContainer} alt="" />
        </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev" >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden" >Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div> */}
