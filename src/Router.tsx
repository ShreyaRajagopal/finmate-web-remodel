
import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import CashStashStats from "./pages/CashStashStats";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/cash-stash-stats" element={<CashStashStats />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
