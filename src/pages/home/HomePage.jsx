import React, { useEffect } from "react";
import LandingPage from "../landing/LandingPage";
import { v4 as uuidv4, v7 as uuidv7 } from "uuid";
import { useDispatch } from "react-redux";
import { deviceRegisterFn } from "../../store/slices/auth.slice";

function HomePage() {
  const deviceIdentifier = localStorage.getItem("deviceIdentifier") || uuidv4();
  const deviceToken = localStorage.getItem("deviceToken") || uuidv7();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("deviceIdentifier")) {
      localStorage.setItem("deviceIdentifier", deviceIdentifier);
    }
    if (!localStorage.getItem("deviceToken")) {
      localStorage.setItem("deviceToken", deviceToken);
    }
  }, [deviceIdentifier, deviceToken]);

  useEffect(() => {
    dispatch(deviceRegisterFn({ deviceToken, deviceIdentifier }));
  }, [deviceIdentifier, deviceToken, dispatch]);

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default HomePage;
