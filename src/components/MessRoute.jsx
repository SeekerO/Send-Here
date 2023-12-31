import React, { useState } from "react";
import LandingPage from "../layout/LandingPage";
import Messaging from "../layout/Messaging";
import { Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from "../layout/ForgotPassword";

function MessRoute() {
  const [user, setUser] = useState();
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<LandingPage setUser={setUser} />} />
        <Route path="*" element={<LandingPage setUser={setUser} />} />
        <Route path="/Login/ForgotPassword" element={<ForgotPassword />} />
        {user && (
          <>
            <Route path="/Messaging" element={<Messaging user={user} />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default MessRoute;
