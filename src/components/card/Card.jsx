const Card = ({ dynamicContextState, lang }) => {
    return (
        <div className="column is-narrow">
            <div className="has-background-warning pt-1 pb-4">
                <div className="columns is-centered">
                    <div className="mt-4 mr-6">
                        <div className="card">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuM4RUJJG4gED8WzlD9KCUQmUCYZIGIEwhEw&usqp=CAU"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <strong>{dynamicContextState[lang].card_title.value}</strong>
                                </h5>
                                <p className="card-text">
                                    <strong>{dynamicContextState[lang].card_desc.value}</strong>
                                </p>
                                <a href="" className="button is-success is-rounded">
                                    <strong>{dynamicContextState[lang].card_btn.value}</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-4 mr-6">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuM4RUJJG4gED8WzlD9KCUQmUCYZIGIEwhEw&usqp=CAU"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                <strong>{dynamicContextState[lang].card_title.value}</strong>
                            </h5>
                            <p className="card-text">
                                <strong>{dynamicContextState[lang].card_desc.value}</strong>
                            </p>
                            <a href="" className="button is-success is-rounded">
                                <strong>{dynamicContextState[lang].card_btn.value}</strong>
                            </a>
                        </div>
                        {/* Add content for the second card here */}
                    </div>
                    <div className="card mt-4 mr-6">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuM4RUJJG4gED8WzlD9KCUQmUCYZIGIEwhEw&usqp=CAU"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                <strong>{dynamicContextState[lang].card_title.value}</strong>
                            </h5>
                            <p className="card-text">
                                <strong>{dynamicContextState[lang].card_desc.value}</strong>
                            </p>
                            <a href="" className="button is-success is-rounded">
                                <strong>{dynamicContextState[lang].card_btn.value}</strong>
                            </a>
                        </div>
                        {/* Add content for the second card here */}
                    </div>
                    <div className="card mt-4">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuM4RUJJG4gED8WzlD9KCUQmUCYZIGIEwhEw&usqp=CAU"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                <strong>{dynamicContextState[lang].card_title.value}</strong>
                            </h5>
                            <p className="card-text">
                                <strong>{dynamicContextState[lang].card_desc.value}</strong>
                            </p>
                            <a href="" className="button is-success is-rounded">
                                <strong>{dynamicContextState[lang].card_btn.value}</strong>
                            </a>
                        </div>
                        {/* Add content for the second card here */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card