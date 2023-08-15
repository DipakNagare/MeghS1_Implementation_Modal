const LinkTypeModal = ({ globalContextState, linkTypeHandlers, validationState, validationHandlers }) => {
    const ModelClosebutton = () => {
        validationState.linkModalContent.title = undefined;
        validationState.linkModalContent.link = undefined;
        linkTypeHandlers.linkTypeModalResetHandler();
    }
    return (
        <div>
            <div id="addNewQuiz" className={`modal ${(globalContextState.modal.status && globalContextState.modal.type === "link") && "is-active"}`}>
                <div className="modal-background" />
                <div className="modal-card">
                    <div className="box">
                        <div>
                            <h2 className="title is-3 has-text-centered my-2 pb-3">Update link</h2>
                        </div>
                        <hr />
                        <div>
                            <input className={`input ${validationState.linkModalContent.title !== undefined && "is-danger"}`} name="title" value={globalContextState.linkModalContent.title} onChange={(e) => { linkTypeHandlers.linkTypeDataUpdateHandler(e); validationHandlers.linkTypeValidatorHandler(e)}} type="text" placeholder="Enter The Text To Update" />
                            <p className="help is-danger has-text-left">{validationState.linkModalContent.title}</p>
                        </div>
                        <hr />
                        <div>
                            <input className={`input ${validationState.linkModalContent.link !== undefined && "is-danger"}`} name="link" value={globalContextState.linkModalContent.link} onChange={(e) => { linkTypeHandlers.linkTypeDataUpdateHandler(e); validationHandlers.linkTypeValidatorHandler(e) }} type="text" placeholder="Enter The Text To Update" />
                            <p className="help is-danger has-text-left">{validationState.linkModalContent.link}</p>
                        </div>
                        <hr />
                        <div className="columns is-centered is-vcentered">
                            <div className="column is-6">
                                <button className="button is-danger is-fullwidth" onClick={ModelClosebutton}>Close</button>
                            </div>
                            <div className="column is-6">
                                <button className="button is-success is-fullwidth" onClick={linkTypeHandlers.linkTypeDataSubmitHandler}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkTypeModal



