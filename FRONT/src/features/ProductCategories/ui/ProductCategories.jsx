import React from "react";
import styles from "../ui/style.module.scss";

import { PRODUCT_CATEGORIES } from "../model/constants/categories";

const ProductCategories = () => {
  return (
    <section className={styles.showcase}>
      <h2 className="font-poiret font-semibold text-[40px] max-w-3xl text-center mx-auto">
        СОБСТВЕННОЕ ПРОИЗВОДСТВО ШТОР В САНКТ-ПЕТЕРБУРГЕ И МОСКВЕ
      </h2>
      <div className={styles.categories}>
        {PRODUCT_CATEGORIES.map((category) => (
          <div key={category.id} className={styles.category}>
            <img
              src={category.iconUrl || "/placeholder.svg"}
              alt={category.alt}
              className={styles.icon}
            />
            <span className="font-jost font-normal text-2xl">
              {category.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
