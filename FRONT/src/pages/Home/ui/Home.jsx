import React from "react";
import { Header } from "../../../widgets/Header";
import { Footer } from "../../../widgets/Footer";
import { HeroSection } from "../../../widgets/HeroSection";
import { ProductCategories } from "../../../features/ProductCategories";
import { ManagingSlider } from "../../../features/ManagingSlider";
import { Portfolio } from "../../../widgets/Portfolio";
import { SwiperSlider } from "../../../features/Swiper";
import { Banner } from "../../../shared/ui/Banner";
import { Button } from "../../../shared/ui/Button";
import logo from "../../../shared/assets/images/logo.png";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductCategories />
      <ManagingSlider />

      <Portfolio />

      {/* <Banner height={200}>
        <img src={logo} className="w-[12%] h-auto" alt="" />
        <div className="center-content">
          <h2 className="text-milkWhiteCustom text-2xl font-semibold text-center">
            ЗАКАЖИТЕ БЕСПЛАТНЫЙ <br /> ВЫЕЗД СПЕЦИАЛИСТА
          </h2>
        </div>
        <div className="right-content">
          <Button
            variant="default"
            size="sm"
            className="bg-[#FFFDF8] text-beigeCustom shadow-custom"
          >
            Заказать сейчас
          </Button>
        </div>
      </Banner>
      <SwiperSlider /> */}
      <Footer />
    </div>
  );
}

export default Home;
