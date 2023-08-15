const AfterExtraComponents = ({ dynamicContextState,globalContextState,textTypeHandlers, lang }) => {
    return (
        <div>
            <div className="sc-khIgEk hQhHpX">
                <section className="testimonial-area mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-title text-center">
                                    <h4> <strong>{dynamicContextState[lang].info_title.value}</strong>
                                       {globalContextState.editMode && <button className="button ml-2 is-small is-dark" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("info_title") }}>
                                            <i className="fa-solid fa-pen"></i>
                                        </button>}
                                    </h4>
                                    {/* <Card /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default AfterExtraComponents