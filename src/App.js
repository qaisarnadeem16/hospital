
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import OPD from "./Pages/OPD";
import OperationTheater from "./Pages/OperationTheater";
import PhysiotherapyDepartmnt from "./Pages/PhysiotherapyDepartmnt";
import Laboratory from "./Pages/Laboratory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="opd" element={<OPD />} />
          <Route path="operationTheater" element={<OperationTheater />} />
          <Route path="PhysiotherapyDepartmnt" element={<PhysiotherapyDepartmnt />} />
          <Route path="laboratory" element={<Laboratory />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
