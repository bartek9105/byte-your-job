import Image from "next/image";
import styles from "./OffersSliderItem.module.scss";
import { Offer } from "@/app/types/Offer";

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
  const location = `${city}, ${country}`;
  const salaryRange = `${salaryMin} - ${salaryMax} ${currency}`;

  return (
    <article className={styles.container}>
      <div className={styles.companyInfo}>
        <Image src={imgUrl} width="36" height="36" alt={companyName} />
        <div>
          <h3 className={styles.companyName}>{companyName}</h3>
          <p className={styles.location}>{location}</p>
        </div>
      </div>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.type}>{type}</p>
      </div>
      <p className={styles.salary}>{salaryRange}</p>
    </article>
  );
};
