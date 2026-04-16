/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Expertise from "./pages/Expertise";
import Education from "./pages/Education";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="education" element={<Education />} />
        </Route>
      </Routes>
    </Router>
  );
}
