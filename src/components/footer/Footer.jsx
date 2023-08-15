const Footer = ({ dynamicContextState,globalContextState, linkTypeHandlers, lang, textTypeHandlers }) => {
    return (
        <footer className="text-center text-lg-start text-muted has-background-grey-light mt-4">
            <section className="d-flex justify-content-center justify-content-lg-between p-4">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3 text-secondary"></i>
                                <strong>{dynamicContextState[lang].cA.value}</strong>
                            </h6>
                            <p><strong>{dynamicContextState[lang].cdac_full_address.value}</strong>
                                {globalContextState.editMode && <button className="button ml-2 is-small is-dark" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("cdac_full_address") }}>
                                    <i className="fa-solid fa-pen"></i>
                                </button>}
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <strong>{dynamicContextState[lang].usefull_links.value}</strong>
                            </h6>
                            <p>
                                <a href={dynamicContextState[lang].footerPoweredBy.link.value} className="text-reset">
                                    <strong>{dynamicContextState[lang].footerPoweredBy.title.value}</strong>
                                </a>
                                { globalContextState.editMode && <button className="button ml-2 is-small is-dark" onClick={() => { linkTypeHandlers.linkTypeModalUpdateHandler("footerPoweredBy") }}>
                                    <i className="fa-solid fa-pen"></i>
                                </button>}
                            </p>
                            <p>
                                <a href={dynamicContextState[lang].footerMeghS.link.value} className="text-reset">
                                    <strong>{dynamicContextState[lang].footerMeghS.title.value}</strong>
                                </a>
                                {globalContextState.editMode && <button className="button ml-2 is-small is-dark" onClick={() => { linkTypeHandlers.linkTypeModalUpdateHandler("footerMeghS") }}>
                                    <i className="fa-solid fa-pen"></i>
                                </button>}
                            </p>
                            <p>
                                <a href={dynamicContextState[lang].footerHelp.link.value} className="text-reset">
                                    <strong>{dynamicContextState[lang].footerHelp.title.value}</strong>
                                </a>
                               {globalContextState.editMode && <button className="button ml-2 is-small is-dark" onClick={() => { linkTypeHandlers.linkTypeModalUpdateHandler("footerHelp") }}>
                                    <i className="fa-solid fa-pen"></i>
                                </button>}
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <div className="text-center p-4 background-color: rgba(0, 0, 0, 0.025)">
                <strong> {dynamicContextState[lang].copyright.value} </strong> |<strong>{dynamicContextState[lang].powerby1.value} {dynamicContextState[lang].megh1.value} </strong>
                {globalContextState.editMode && <button className="button ml-2 is-small is-dark mr-2 " onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("megh1") }}>
                    <i className="fa-solid fa-pen"></i>
                </button>}
                <strong> {dynamicContextState[lang].design_develop.value}</strong>
                {globalContextState.editMode && <button className="button ml-2 is-small is-dark" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("design_develop") }}>
                    <i className="fa-solid fa-pen"></i>
                </button>}
            </div>
        </footer>
    )
}

export default Footer