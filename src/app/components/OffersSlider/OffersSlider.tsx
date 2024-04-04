import {
  OffersSliderItem,
  OffersSliderItemProps,
} from "./OfferSlideItem/OffersSliderItem";

import styles from "./OffersSlider.module.scss";

interface OffersSliderProps {
  offers: OffersSliderItemProps[];
  title: string;
}

export const OffersSlider = ({ offers, title }: OffersSliderProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {offers.map((offer, index) => (
          <li key={index} className={styles.listItem}>
            <OffersSliderItem {...offer} />
          </li>
        ))}
      </ul>
    </div>
  );
};
