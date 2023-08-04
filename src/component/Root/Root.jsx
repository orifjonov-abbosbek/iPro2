import React, { useState, useEffect } from "react";
import Nav from "../Navbar/Nav";
import Home from "../../pages/Home/Home";
import Loader from "../Loader/loader";
import { Routes, Route } from "react-router-dom";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleOnline = () => setLoading(false);
    const handleOffline = () => setLoading(true);
    const handleLoad = () => setLoading(false); // Handle load event to close the loader

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("load", handleLoad);

    if (navigator && navigator.connection) {
      const { effectiveType } = navigator.connection;
      if (effectiveType === "slow-2g" || effectiveType === "2g") {
        setLoading(true);
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false); // Fallback behavior when navigator.connection is not available
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Root;
