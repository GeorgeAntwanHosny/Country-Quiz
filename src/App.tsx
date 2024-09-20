import "./App.css";
import CountryQuestionsProvider from "./context/CountryQuestionsProvider";
import QuizeView from "./views/QuizeView";
import ResultView from "./views/ResultView";

function App() {
  // bg-gradient-to-br from-color_1_grident to-color_2_grident
  
  return (
    <>
     <CountryQuestionsProvider>
        <QuizeView/>
       <ResultView/>
     
     </CountryQuestionsProvider>
    </>
  );
}

export default App;
