import { Offer } from "@/app/types/Offer";
import Image from "next/image";
import styles from "./OfferListItem.module.scss";
import { TechnologiesTagsList } from "./TechnologiesTagsList/TechnologiesTagsList";
import {
  formatLocation,
  formatSalaryRange,
} from "@/app/utils/formated-data-display";
import { getTimeDistanceToNow } from "@/app/utils/date";

export const OfferListItem = ({
  imgUrl,
  companyName,
  title,
  city,
  country,
  type,
  createdAt,
  salaryMin,
  salaryMax,
  currency,
  technologies,
}: Offer) => {
  return (
    <article className={styles.container}>
      <div className={styles.row}>
        <Image
          src={imgUrl}
          width="36"
          height="36"
          alt={companyName}
          className={styles.image}
        />
        <div className={styles.titleAndLocation}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.locationAndType}>
            <span>{formatLocation(city, country)}</span>
            <span>{type}</span>
          </div>
        </div>
        <span className={styles.createdAt}>
          {getTimeDistanceToNow(createdAt)}
        </span>
      </div>
      <div className={styles.row}>
        <div />
        <span className={styles.salaryRange}>
          {formatSalaryRange(salaryMin, salaryMax, currency)}
        </span>
      </div>
      <div className={styles.row}>
        <div />
        <TechnologiesTagsList technologies={technologies} />
      </div>
    </article>
  );
};
