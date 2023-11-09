import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../core/layout/main";
import { Home } from "../pages/home";

export function PortifolioRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
