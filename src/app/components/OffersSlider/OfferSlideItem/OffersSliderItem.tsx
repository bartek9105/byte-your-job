import Image from "next/image";
import styles from "./OffersSliderItem.module.scss";

interface Salary {
  min: string;
  max: string;
  currency: string;
}

export interface OffersSliderItemProps {
  imgUrl: string;
  city: string;
  country: string;
  title: string;
  companyName: string;
  type: string;
  salary: Salary;
}

export const OffersSliderItem = ({
  companyName,
  imgUrl,
  city,
  country,
  title,
  type,
  salary,
}: OffersSliderItemProps) => {
  const location = `${city}, ${country}`;
  const salaryRange = `${salary.min} - ${salary.max} ${salary.currency}`;

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
