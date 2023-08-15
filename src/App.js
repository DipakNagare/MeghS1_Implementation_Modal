import { DynamicContext } from "./context/DynamicContext";
import DynamicContextState from "./context/state/DynamicContextState";
import HomeLayouter from "./layouter/HomeLayouter";
import { GlobalContext } from "./context/GlobalContext";
import GlobalContextState from "./context/state/GlobalContextState";
import 'react-toastify/dist/ReactToastify.css';
import GlobalComponents from "./components/Global/GlobalComponents";
import { ValidationContext } from "./components/Validations/ValidationContext";
import ValidationState from "./context/ValidationState";
import axios from 'axios'; // Import axios here
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";


function App() {
  const { defaultDynamicContextState, dynamicContextState, setDynamicContextState } = DynamicContextState()
  const { defaultGlobalContextState, globalContextState, setGlobalContextState } = GlobalContextState()
  const { defaultValidationState, validationState, setValidationState } = ValidationState()
  const [loading, setLoading] = useState(true);
  const languages = ['eng', 'hnd', 'tel'];
  // Function to fetch data for a specific language
  const fetchData = async (lang) => {
    try {
      const response = await axios.get(`http://dipakn.hyderabad.cdac.in:8080/content/${lang}`);
      if (response.status === 200) {
        console.log("response data : ", response.data);
        setDynamicContextState(prevState => { return { ...prevState, [lang]: response.data } });
      }
    } catch (error) {
      console.error('Error fetching data:');
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchData('eng');
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        for (const lang of languages) {
          await fetchData(lang);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
         <HashLoader color="#36d7b7" loading={loading} size={100} />
        </div>
      ) :
        <GlobalContext.Provider value={{ defaultGlobalContextState, globalContextState, setGlobalContextState }}>
          <DynamicContext.Provider value={{ defaultDynamicContextState, dynamicContextState, setDynamicContextState }}>
            <ValidationContext.Provider value={{ defaultValidationState, validationState, setValidationState }}>
              <HomeLayouter />
              <GlobalComponents />
            </ValidationContext.Provider>
          </DynamicContext.Provider>
        </GlobalContext.Provider>
      }
    </div>
  );
}

export default App;