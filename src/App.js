import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstWebinar from "./designComponents/FirstWebinar";
import WebinarDetails from "./designComponents/WebinarDetails";
import WebinarTypesApiCall from "./designComponents/WebinarTypesApiCall";

function App() {
  
  return (
    // <Button></Button>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<WebinarTypesApiCall></WebinarTypesApiCall>}
        ></Route>
        <Route
          path="/webinar/:id"
          element={<FirstWebinar></FirstWebinar>}
        ></Route>
        <Route
          path="/webinars/:category"
          element={<WebinarDetails></WebinarDetails>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
