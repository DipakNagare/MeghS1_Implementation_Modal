const ECss = {
    fontSize: "50px"
}

const AfterCarouselComponents = ({ dynamicContextState, textTypeHandlers, globalContextState, lang }) => {
    return (

        <div className="sc-bBjRSN cdTyhF bg-secondary ControlsNoTouching ">
            <section className="icon-box-area mt-3">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 mt-3">
                            <div className="full-icon-box">
                                <div className="icon-box d-flex ">
                                    <div className="box-icon box1">
                                        <i className="las la-thumbs-up" style={ECss}>
                                        </i>
                                        </div>
                                        <div className="box-title mt-1">
                                        <h6> <strong>{dynamicContextState[lang].popular_courses.value}</strong>
                                            { globalContextState.editMode && <button className="button ml-2 is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("popular_courses") }}>
                                                <i className="fa-solid fa-pen"></i>
                                            </button>}
                                        </h6>
                                        <p>
                                            <strong>{dynamicContextState[lang].popular_courses_desc.value}</strong>
                                            {globalContextState.editMode && <button className="button ml-2 is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("popular_courses_desc") }}>
                                                <i className="fa-solid fa-pen"></i>
                                            </button>}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="full-icon-box">
                                <div className="icon-box d-flex">
                                    <div className="box-icon box2">
                                        <i className="las la-book-reader" style={ECss}>
                                        </i>
                                    </div>
                                    <div className="box-title">
                                        <h6>
                                            <strong>{dynamicContextState[lang].modern_library.value}</strong>
                                           {globalContextState.editMode &&  <button className="button ml-2 is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("modern_library") }}>
                                                <i className="fa-solid fa-pen"></i>
                                            </button>}
                                        </h6>
                                        <p>
                                            <strong>{dynamicContextState[lang].modern_library_desc.value}</strong>
                                            {globalContextState.editMode && <button className="button ml-2 is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("modern_library_desc") }}>
                                                <i className="fa-solid fa-pen"></i>
                                            </button>}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="full-icon-box">
                                <div className="icon-box d-flex">
                                    <div className="box-icon box3">
                                        <i className="las la-chalkboard-teacher" style={ECss}>
                                        </i>
                                    </div>
                                    <div className="box-title">
                                        <h6> <strong>{dynamicContextState[lang].qualified_teacher.value}</strong>
                                           {globalContextState.editMode &&  <button className="button ml-2 is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("qualified_teacher") }}>
                                                <i className="fa-solid fa-pen"></i>
                                            </button>}
                                        </h6>
                                        <p><strong>{dynamicContextState[lang].qualified_teacher_desc.value}</strong>
                                           {globalContextState.editMode &&  <button className="button ml-2 is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("qualified_teacher_desc") }}>
                                                <i className="fa-solid fa-pen"></i>
                                            </button>}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AfterCarouselComponents