import axios from 'axios';
import { toast } from 'react-toastify';
import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLoader } from "react-spinners";


const Header = ({ globalHandlers, globalContextState, dynamicContextState, textTypeHandlers, lang, loading, setLoading }) => {

  const saveEditData = () => {
    // setEditedData(dynamicContextState);
    // console.log("daat in backend======", dynamicContextState[lang]);
    // console.log("daat in type======",typeof DD[lang].cdac_address.regex);
    // console.log("daat in backend======", DD[lang].cdac_address.regex);
    // console.log("daat in backend======+_+_+_+__+", dynamicContextState[lang]["cdac_address"]);
    // console.log("daat in backend======________s___", dynamicContextState[lang]["about_desc1"]);
    // console.log("lang++++++++++++++", lang, "+++++++++++")
    // console.log("++++`http://dipakn.hyderabad.cdac.in:8080/content/${lang}`+++++",`http://dipakn.hyderabad.cdac.in:8080/content/${lang}`);
    setLoading(true);
    const updatedDD = { ...dynamicContextState[lang] };

    for (const key in updatedDD) {
      if (Object.prototype.hasOwnProperty.call(updatedDD, key)) {
        const property = updatedDD[key];
        if (property.hasOwnProperty("regex")) {
          property.type = "String";
        }
      }
    }
    axios.put(`http://localhost:8080/content/${lang}`, updatedDD)
      .then(response => {
        if (response.status === 200) {
          setTimeout(() => {
            setLoading(false)
            toast.success('Data saved successfully');
          }, 3000);
        } else {
          toast.error('Error saving data');
        }
      })
      .catch(error => {
        toast.error('Error saving data');
        console.log(error);
      });
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }
  // console.log("_+_+_+_+_+_+_+_+_+_+_++", dynamicContextState[lang].cdac_address.value);
  return (
    <>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <HashLoader color="#36d7b7" loading={loading} size={100} />
        </div>
      ) : (
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              <strong>{dynamicContextState[lang].cdac_address.value}</strong>
            </a>
            {globalContextState.editMode && (
              <button className="button mt-2 is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("cdac_address") }}>
                <i className="fa-solid fa-pen"></i>
              </button>
            )}
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">{dynamicContextState[lang].have_questions.value}</a>
              {globalContextState.editMode && (
                <button className="button mt-3 is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("have_questions") }}>
                  <i className="fa-solid fa-pen"></i>
                </button>
              )}
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="select mr-2">
                  <select name="lang" value={globalContextState.lang} onChange={globalHandlers.updateGlobalLanguageHandler}>
                    <option value="eng">English</option>
                    <option value="hnd">Hindi</option>
                    <option value="tel">Telugu</option>
                  </select>
                </div>
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>{dynamicContextState[lang].log_in.value}</strong>
                  </a>
                  <a className="button is-warning">{dynamicContextState[lang].register.value}</a>
                  <div>
                    <Form.Check
                      style={{ transform: "scale(1.3)" }}
                      className='ml-2'
                      type="switch"
                      id="custom-switch"
                      checked={globalContextState.editMode}
                      onChange={globalHandlers.editModeChangeHandler}
                    />
                  </div>
                  {globalContextState.editMode && (
                    <div>
                      <button className="button ml-2 is-success" onClick={saveEditData}>Save</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};


export default Header;
