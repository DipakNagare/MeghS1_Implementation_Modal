const Navbar = ({ dynamicContextState, textTypeHandlers, fileTypeHandlers, globalContextState, linkTypeHandlers, lang }) => {

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div >
                        <strong>
                        {/* <img src={dynamicContextState.eng.megh_Logo.link} width={250} /> */}
                             <img src={`${globalContextState.server.uploads}/files/download/${dynamicContextState[lang].megh_Logo.link}/bypassed`} width={250} />
                        </strong>
                    </div>
                    {globalContextState.editMode && <button className="button mt-4 ml-2 is-small is-dark" onClick={() => { fileTypeHandlers.fileTypeModalUpdateHandler("megh_Logo") }}>
                        <i className="fa-solid fa-pen"></i>
                    </button>}
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end"> 
                        <div className="navbar-item">
                            <div className="buttons">
                                {/* eslint-disable-next-line */}
                                <ul>
                                    <li>
                                        <a className="button is-primary">
                                            <strong>{dynamicContextState[lang].call_us_now.value}</strong>
                                        </a>
                                        {globalContextState.editMode && <button className="button" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("call_us_now") }}>
                                            <i className="fa-solid fa-pen"></i>
                                        </button>}
                                    </li>
                                    <li>
                                        <a href={dynamicContextState[lang].call_us_phone.link.value} className="text-reset">
                                            <strong> {dynamicContextState[lang].call_us_phone.title.value} </strong>
                                        </a>
                                       {globalContextState.editMode &&  <button className="button ml-2 is-small is-dark" onClick={() => { linkTypeHandlers.linkTypeModalUpdateHandler("call_us_phone") }}>
                                            <i className="fa-solid fa-pen"></i>
                                        </button>}
                                    </li>
                                    {/* eslint-disable-next-line */}
                                </ul>
                                <ul>
                                    <li>
                                        <a className="button is-light has-background-info ">
                                            <strong> {dynamicContextState[lang].enquiry_us.value} </strong>
                                        </a>
                                        {globalContextState.editMode && <button className="button" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("enquiry_us") }}>
                                            <i className="fa-solid fa-pen"></i>
                                        </button>}
                                    </li>
                                    <li>
                                        <a href={dynamicContextState[lang].enquiry_us_id.link.value} className="has-text-link">
                                            <strong> {dynamicContextState[lang].enquiry_us_id.title.value} </strong>
                                        </a>
                                        {globalContextState.editMode && <button className="button ml-2 is-small is-dark" onClick={() => { linkTypeHandlers.linkTypeModalUpdateHandler("enquiry_us_id") }}>
                                            <i className="fa-solid fa-pen"></i>
                                        </button>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar