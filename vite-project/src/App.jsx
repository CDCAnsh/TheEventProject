import { Routes, Route } from "react-router-dom";
import RequestEvent from "./components/requestpage/RequestEvent";
import EventPage from "./pages/Event-Page";

function App() {
  return (
    <div className=" bg-[#fefeff]">
      <Routes>
        <Route path="/" element={<EventPage />}></Route>
        <Route path="/requestEvent" element={<RequestEvent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
