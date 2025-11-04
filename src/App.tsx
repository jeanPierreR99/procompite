import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./shared/Layout/Layout";
import Notices from "./features/notices/Notices";
import Gallery from "./features/gallery/Gallery";
import Comunications from "./features/comunications/Comunications";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Layout />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/comunications" element={<Comunications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
