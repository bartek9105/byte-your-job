import { Offer } from "@/app/types/Offer";
import { OfferListItem } from "./OfferListItem/OfferListItem";
import styles from "./OffersList.module.scss";
import { QuickFilters } from "../../QuickFilters/QuickFilters";

const quickFilters = [
  {
    name: "mostRecent",
    displayName: "Most recent",
  },
  {
    name: "highestSalary",
    displayName: "Highest salary",
  },
];

interface OffersListProps {
  offers: Offer[] | null;
  activeFilters: any;
}

export const OffersList = ({ offers }: OffersListProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        All offers{" "}
        <span className={styles.hint}>({offers?.length} results) </span>
      </h3>
      <div className={styles.quickFilters}>
        <QuickFilters filter="sortBy" values={quickFilters} />
      </div>
      <ul>
        {offers?.map((offer, index) => (
          <li key={index} className={styles.listItem}>
            <OfferListItem {...offer} />
          </li>
        ))}
      </ul>
    </div>
  );
};
