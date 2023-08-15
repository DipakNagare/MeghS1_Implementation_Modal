const FileTypeModal = ({ globalContextState, fileTypeHandlers,validationState,validationHandlers}) => {

    return (
        <div>
            <div id="addNewQuiz" className={`modal ${(globalContextState.modal.status && globalContextState.modal.type === "file") && "is-active"}`}>
                <div className="modal-background" />
                <div className="modal-card">
                    <div className="box has-text-centered">
                        <div className="mb-4">   
                            <h2 className="title is-3 has-text-centered my-2 pb-3">Update File</h2>
                        </div>
                        <div className="file is-info has-name">
                            <label className="file-label">      
                                                                                                                                                        {/* this write because i want to show error at the time of file upload && if i want to show error in after click on button they remove it validation funcation */}
                                <input className="file-input" type="file" name="resume" onChange={(e) => {fileTypeHandlers.fileTypeDataUpdateHandler(e); validationHandlers.fileTypeValidatorHandler(e) }} />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload" />
                                    </span>
                                    <span className="file-label">
                                        Upload File
                                    </span>
                                </span>
                                <span className="file-name">
                                    {globalContextState.fileModalContent.file.length !== 0 ? globalContextState.fileModalContent.file[0].name : "No File Selected" }
                                </span>
                            </label>
                        </div>
                        <p className="help is-danger has-text-left">{validationState.fileModalContent.file}</p>
                        <hr />
                        <div className="columns is-centered is-vcentered">
                            <div className="column is-6">
                                <button className="button is-danger is-fullwidth" onClick={fileTypeHandlers.fileTypeModalResetHandler}>Close</button>
                            </div>
                            <div className="column is-6">
                                <button className="button is-success is-fullwidth" onClick={fileTypeHandlers.fileTypeDataSubmitHandler}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileTypeModal