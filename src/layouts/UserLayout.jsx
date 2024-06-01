import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import ScrollToTop from "../components/ui/Scroll";
import Banner from "../components/ui/Banner";

const UsersLayout = () => {
  return (
    <>
      <Banner />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default UsersLayout;
