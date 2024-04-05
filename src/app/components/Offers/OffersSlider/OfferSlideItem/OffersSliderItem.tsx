import styles from "./OffersSliderItem.module.scss";
import { Offer } from "@/app/types/Offer";
import {
  formatLocation,
  formatSalaryRange,
} from "@/app/utils/formated-data-display";
import { OfferCompanyLogo } from "../../OfferCompanyLogo/OfferCompanyLogo";

export const OffersSliderItem = ({
  companyName,
  imgUrl,
  city,
  country,
  title,
  type,
  salaryMin,
  salaryMax,
  currency,
}: Offer) => {
  return (
    <article className={styles.container}>
      <div className={styles.companyInfo}>
        <OfferCompanyLogo imgUrl={imgUrl} alt={companyName} />
        <div>
          <h3 className={styles.companyName}>{companyName}</h3>
          <p className={styles.location}>{formatLocation(city, country)}</p>
        </div>
      </div>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.type}>{type}</p>
      </div>
      <p className={styles.salary}>
        {formatSalaryRange(salaryMin, salaryMax, currency)}
      </p>
    </article>
  );
};
