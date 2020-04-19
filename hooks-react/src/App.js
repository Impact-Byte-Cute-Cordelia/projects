import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import HooksUseEffect2 from "./pages/HooksUseEffect2";
import ReduxHooks2 from "./pages/ReduxHooks2";

// export const UserContext = React.createContext();
// export const DeveloperContext = React.createContext();

function App() {
  // const [bestDeveloper, setBestDeveloper] = useState({
  //   number1: "thoriq the developer",
  // });
  // const bestDeveloper = { number1: "thoriq" };
  return (
    <div className="App">
      {/* <UserContext.Provider value={"thor the dev"}>
        <DeveloperContext.Provider value={bestDeveloper}>
          <HooksUseEffect2 />
        </DeveloperContext.Provider>
      </UserContext.Provider> */}
      <ReduxHooks2 />
    </div>
  );
}

export default App;
