const ExtraAfterCarouselComponents = ({ dynamicContextState, globalContextState, textTypeHandlers, fileTypeHandlers, lang }) => {
    return (
        <div>
            <div className="sc-cOifOu haQoIp">
                <section className="about-us mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-image mr-6">
                                    <div className="card" >
                                        <div className="card-image" >
                                            <div className="image is-16by9">
                                                <img src={`${globalContextState.server.uploads}/files/download/${dynamicContextState.eng.hOPPA_image.link}/bypassed`} alt="Placeholder image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" buttons is-right">
                                    {globalContextState.editMode && <button className="button mt-1 is-small is-dark" onClick={() => { fileTypeHandlers.fileTypeModalUpdateHandler("hOPPA_image") }}>
                                        <i className="fa-solid fa-pen"></i>
                                    </button>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-content">
                                    <h4 className="about-title"><strong>{dynamicContextState[lang].title.value}</strong>
                                        {globalContextState.editMode && <button className="button ml-2 is-small is-dark" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("title") }}>
                                            <i className="fa-solid fa-pen"></i>
                                        </button>}
                                    </h4>
                                    <p className="about-para"><strong>{dynamicContextState[lang].about_desc1.value}</strong>
                                       {globalContextState.editMode && <button className="button ml-2 is-small is-dark" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("about_desc1") }}>
                                            <i className="fa-solid fa-pen"></i>
                                        </button>}
                                    </p>
                                    <p className="about-para"><strong>{dynamicContextState[lang].about_desc2.value}</strong>
                                       {globalContextState.editMode &&  <button className="button ml-2 is-small is-dark" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("about_desc2") }}>
                                            <i className="fa-solid fa-pen"></i>
                                        </button>}
                                    </p>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="counter-box box1 text-center ">
                                                <h3>
                                                    <span>5</span>
                                                    <i className="las la-plus"></i>
                                                </h3>
                                                <p><strong>{dynamicContextState[lang].happy_students.value}</strong>
                                                 { globalContextState.editMode &&  <button className="button ml-2 is-small is-dark" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("happy_students") }}>
                                                        <i className="fa-solid fa-pen"></i>
                                                    </button>}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="counter-box box2 text-center">
                                                <h3>
                                                    <span>3</span>
                                                    <i className="las la-plus"></i>
                                                </h3>
                                                <p><strong>{dynamicContextState[lang].teachers.value}</strong>
                                                    { globalContextState.editMode && <button className="button ml-2 is-small is-dark" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("teachers") }}>
                                                        <i className="fa-solid fa-pen"></i>
                                                    </button>}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="counter-box box3 text-center">
                                                <h3>
                                                    <span>8</span>
                                                    <i className="las la-plus">
                                                    </i>
                                                </h3>
                                                <p> <strong>{dynamicContextState[lang].coursess.value}</strong>
                                                    {globalContextState.editMode && <button className="button ml-2 is-small is-dark" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("coursesss") }}>
                                                        <i className="fa-solid fa-pen"></i>
                                                    </button>}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <a className="readmore-btn" target="_blank" href="https://www.punjabpoliceacademy.com/history-punjab-police-academy-phillaur">  <strong>{dynamicContextState[lang].read_more.value}</strong></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ExtraAfterCarouselComponents