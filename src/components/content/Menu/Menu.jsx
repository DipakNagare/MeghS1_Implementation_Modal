
const Menu = ({ dynamicContextState, lang }) => {
    return (
      
        <div className="main-menu-box bg-secondary ">
            <div className="menu-box d-flex justify-content-center py-3 ">
                <ul className="nav menu-nav ">
                        <a className="navbar-item">
                            <strong>
                                {dynamicContextState[lang].home.value}
                            </strong>
                        </a>
                    <li>
                        <a className="navbar-item">
                            <strong>
                                {dynamicContextState[lang].about_us.value}
                            </strong>
                        </a>
                    </li>
                    <li>
                    <a className="navbar-item">
                        <strong>
                            {dynamicContextState[lang].courses.value}
                        </strong>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu

// <a>
// <strong>{dynamicContextState[lang].home.value}</strong>
// </a>
        // <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        //     <div className="navbar-item center">
        //         <div className="navbar-brand">
        //             <a className="navbar-item">
        //                 <strong>
        //                     {dynamicContextState[lang].home.value}
        //                 </strong>
        //             </a>
        //         </div>
        //         <div id="navbarBasicExample" className="navbar-menu navbar-brand">
        //             <div className="navbar-start">
        //                 <a className="navbar-item">
        //                     <strong>
        //                         {dynamicContextState[lang].about_us.value}
        //                     </strong>
        //                 </a>
        //                 <a className="navbar-item">
        //                     <strong>
        //                         {dynamicContextState[lang].courses.value}
        //                     </strong>
        //                 </a>
        //                 <div className="navbar-item ">
        //                     <a>
        //                         <strong>
        //                             {dynamicContextState[lang].contact.value}
        //                         </strong>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </nav>