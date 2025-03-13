import styles from "../ui/style.module.scss";
import { Button } from "../../../shared/ui/Button";

import curtainImg from "../../../shared/assets/images/curtain.png";
import frameImg from "../../../shared/assets/images/frame.jpg";

function HeroSection() {
  return (
    <section
      className={`w-full h-[130vh] gap-5 flex px-[10%] mt-12 ${styles.section}`}
    >
      <div className="relative w-full flex justify-between mx-auto overflow-hidden rounded-lg pl-[10%] bg-beigeCustom shadow-custom">
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]" />
        <div className="relative w-full z-10 flex items-center">
          <h1 className="text-grayCustom font-poiret font-semibold text-6xl leading-tight max-w-[90%]">
            Шторы с электрическим приводом под ключ
          </h1>
        </div>
        <img className="w-auto h-[55vh]" src={curtainImg} alt="" />
      </div>
      <div className="flex gap-5 justify-between">
        <div className="relative w-full flex justify-between mx-auto overflow-hidden rounded-lg shadow-custom">
          <img className="w-full h-auto" src={frameImg} alt="" />
        </div>
        <div className="relative w-full flex justify-between mx-auto overflow-hidden rounded-lg bg-beigeCustom shadow-custom">
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]" />
          <div className="relative w-full z-10 flex flex-col gap-4 justify-center items-center">
            <h2 className="text-grayCustom text-5xl font-poiret font-semibold text-center leading-tight">
              Закажите <br />
              бесплатный замер
            </h2>
            <Button
              variant="default"
              size="sm"
              className="bg-[#FFFDF8] text-beigeCustom shadow-custom"
            >
              Заказать сейчас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
