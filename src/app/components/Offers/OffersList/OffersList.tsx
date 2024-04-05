import { Offer } from "@/app/types/Offer";
import { OfferListItem } from "./OfferListItem/OfferListItem";
import styles from "./OffersList.module.scss";

interface OffersListProps {
  offers: Offer[] | null;
}

export const OffersList = ({ offers }: OffersListProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        All offers{" "}
        <span className={styles.hint}>({offers?.length} results) </span>
      </h3>
      <ul className={styles.list}>
        {offers?.map((offer, index) => (
          <li key={index} className={styles.listItem}>
            <OfferListItem {...offer} />
          </li>
        ))}
      </ul>
    </div>
  );
};
