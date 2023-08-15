const UpcomingEvents = ({ dynamicContextState,globalContextState,textTypeHandlers, lang }) => {
    return (
        <div>
            <div className="sc-hTRkXV enlJuL mt-4">
                <section className="event-faq-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="event-area">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="sec-title">
                                                <h4>
                                                    <strong>{dynamicContextState[lang].upcoming.value}</strong>
                                                    <span>{dynamicContextState[lang].events.value}</span>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card">
                                                <div className="card-image">
                                                    <figure className="image is-4by3">
                                                        <img src="https://wallpapercave.com/wp/wp11742784.jpg" alt="Placeholder image" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="faq-area">
                                    <div className="sec-title">
                                        <h4> {dynamicContextState[lang].frequently_ask.value} <span> {dynamicContextState[lang].question.value}</span></h4>
                                    </div>
                                    <div className="faq-box">
                                        <div className="faq-item">
                                            <button className="accordion-button active">
                                                <div className="accordion-icon">
                                                    <i className="las la-plus">
                                                    </i>
                                                </div>
                                                <p>
                                                    {dynamicContextState[lang].faq_titile_1.value}
                                                   {globalContextState.editMode && <button className="button is-small ml-2 is-dark" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("faq_titile_1") }}>
                                                        <i className="fa-solid fa-pen"></i>
                                                    </button>}
                                                </p>
                                            </button>
                                            <div className="accordion-content show">
                                                <p>{dynamicContextState[lang].faq_desc_1.value}
                                                   { globalContextState.editMode && <button className="button  ml-2 is-dark is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("faq_desc_1") }}>
                                                        <i className="fa-solid fa-pen"></i>
                                                    </button>}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <button className="accordion-button active">
                                                <div className="accordion-icon">
                                                    <i className="las la-plus">
                                                    </i>
                                                </div>
                                                <p>{dynamicContextState[lang].faq_titile_2.value}
                                                    {globalContextState.editMode && <button className="button ml-2 is-dark is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("faq_titile_2") }}>
                                                        <i className="fa-solid fa-pen"></i>
                                                    </button>}
                                                </p>
                                            </button>
                                            <div className="accordion-content show">
                                                <p>{dynamicContextState[lang].faq_desc_2.value}
                                                    {globalContextState.editMode && <button className="button ml-2 is-dark is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("faq_desc_2") }}>
                                                        <i className="fa-solid fa-pen"></i>
                                                    </button>}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <button className="accordion-button active">
                                                <div className="accordion-icon">
                                                    <i className="las la-plus">
                                                    </i>
                                                </div>
                                                <p>{dynamicContextState[lang].faq_titile_3.value}
                                                   {globalContextState.editMode && <button className="button ml-2 is-dark is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("faq_titile_3") }}>
                                                        <i className="fa-solid fa-pen"></i>
                                                    </button>}
                                                </p>
                                            </button>
                                            <div className="accordion-content show">
                                                <p>{dynamicContextState[lang].faq_desc_3.value}
                                                    {globalContextState.editMode && <button className="button ml-2 is-dark is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("faq_desc_3") }}>
                                                        <i className="fa-solid fa-pen"></i>
                                                    </button>}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div>
        </div>
    )
}

export default UpcomingEvents