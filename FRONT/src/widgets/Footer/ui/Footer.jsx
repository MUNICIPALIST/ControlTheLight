import React from "react";

import { Button } from "../../../shared/ui/Button";
import { Banner } from "../../../shared/ui/Banner";

import logo from "../../../shared/assets/images/logo.png";
import { telegram, whatsapp } from "../../../shared/assets/images/contacts";

function Footer() {
  return (
    <footer>
      <Banner height={300}>
        <div className="flex flex-wrap justify-between">
          {/* Левая часть */}
          <div className="flex flex-col h-48 justify-between">
            <img src={logo} className="w-40 h-auto" alt="" />

            <div>
              <h3 className="font-jost font-bold text-xl mb-3">
                НАШИ КОНТАКТЫ
              </h3>
              <div className="grid grid-cols-2 gap-11">
                <div className="font-jost text-lg">
                  <p>+7 499 444-61-60</p>
                  <p>upravlay.svetom@gmail.com</p>
                </div>
                <div className="font-jost text-lg text-left">
                  <p>ИП Ратников КА</p>
                  <p>ИНН 773771512659</p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть */}
          <div className="ml-16 my-auto">
            <h3 className="font-jost font-bold text-xl mb-3">
              НАШИ СОЦИАЛЬНЫЕ СЕТИ
            </h3>
            <div className="flex gap-4">
              <a href="#">
                <img src={telegram} alt="" className="w-8 h-8" />
              </a>
              <a href="#">
                <img src={whatsapp} alt="" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </Banner>
      <nav className="bg-[#BD936A] py-4 px-14 flex justify-between items-center">
        {/* Меню */}
        <ul className="flex gap-8 text-white font-bold">
          <li>
            <a href="#">ГЛАВНАЯ</a>
          </li>
          <li>
            <a href="#">ВЫБРАТЬ ШТОРЫ</a>
          </li>
          <li>
            <a href="#">ПОРТФОЛИО</a>
          </li>
        </ul>

        {/* Кнопка */}
        <Button
          variant="default"
          size="sm"
          className="bg-[#FFFDF8] text-[#BD936A] shadow-custom px-4 py-2 rounded-md"
        >
          Публичная оферта
        </Button>
      </nav>
    </footer>
  );
}

export default Footer;
