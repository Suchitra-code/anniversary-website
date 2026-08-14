import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Wedding from "./pages/Wedding";
import Family from "./pages/Family";
import Timeline from "./pages/Timeline";
import Gallery from "./pages/Gallery";
import Letter from "./pages/Letter";

import Final from "./pages/Final";
import Beginning from "./pages/Beginning";
import Invitation from "./pages/Invitation";
import Parents from "./pages/Parents";

import MusicPlayer from "./components/MusicPlayer";

import "./styles/Global.css";


function App() {
  return (
    <BrowserRouter>

      {/* 🎵 MUSIC PLAYER */}
      <MusicPlayer />

      <Routes>

        {/* =========================
            HOME
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =========================
            INVITATION
        ========================= */}

        <Route
          path="/invitation"
          element={<Invitation />}
        />


        {/* =========================
            WEDDING
        ========================= */}

        <Route
          path="/wedding"
          element={<Wedding />}
        />


        {/* =========================
            FAMILY
        ========================= */}

        <Route
          path="/family"
          element={<Family />}
        />


        {/* =========================
            TIMELINE
        ========================= */}

        <Route
          path="/timeline"
          element={<Timeline />}
        />


        {/* =========================
            PARENTS
        ========================= */}

        <Route
          path="/parents"
          element={<Parents />}
        />


        {/* =========================
            GALLERY
        ========================= */}

        <Route
          path="/gallery"
          element={<Gallery />}
        />


        {/* =========================
            LETTER
        ========================= */}

        <Route
          path="/letter"
          element={<Letter />}
        />


        {/* =========================
            FINAL
        ========================= */}

        <Route
          path="/final"
          element={<Final />}
        />


        {/* =========================
            BEGINNING
        ========================= */}

        <Route
          path="/beginning"
          element={<Beginning />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;