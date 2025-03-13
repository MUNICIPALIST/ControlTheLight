import React from "react";
import styles from "./style.module.scss";
import { Button } from "../../../shared/ui/Button";

import logo from "../../../shared/assets/images/logo.png";

function Header() {
  return (
    <header className={`w-full h-[10vh] bg-milkWhiteCustom ${styles.header}`}>
      <img className="w-[12%] h-auto" src={logo} alt="Logo" />
      <nav className="w-[30%] flex justify-between text-black">
        <a href="" className="font-extralight text-[18px]">
          Каталог
        </a>
        <a href="" className="font-extralight text-[18px]">
          Услуги
        </a>
        <a href="" className="font-extralight text-[18px]">
          Отзывы
        </a>
        <a href="" className="font-extralight text-[18px]">
          Для партнеров
        </a>
      </nav>

      <Button variant="outline" className="border-beigeCustom">
        Рассчитать стоимость
      </Button>
    </header>
  );
}

export default Header;
