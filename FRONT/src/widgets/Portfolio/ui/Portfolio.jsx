import styles from "../ui/style.module.scss";

import { CaseSlider } from "../../../features/CaseSlider";

function Portfolio() {
  return (
    <section className={`${styles.slider} w-full mx-auto mt-10 relative mb-12`}>
      <h2 className="flex items-center justify-center font-medium text-3xl mb-8">
        <span className="font-poiret font-semibold text-[40px] max-w-3xl text-center mx-auto mb-16">
          Наши работы
        </span>
      </h2>

      <CaseSlider />
    </section>
  );
}

export default Portfolio;
