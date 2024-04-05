import { Offer } from "@/app/types/Offer";
import { Tag } from "../../../../Tag/Tag";
import styles from "./TechnologiesTagsList.module.scss";

const TAGS_TO_DISPLAY = 3;

interface TechnologiesTagsListProps {
  technologies: Offer["technologies"];
}

export const TechnologiesTagsList = ({
  technologies,
}: TechnologiesTagsListProps) => {
  const limitedTechnologiesList = technologies.slice(0, TAGS_TO_DISPLAY);

  return (
    <ul className={styles.container}>
      {limitedTechnologiesList.map((technology, index) => (
        <li key={index}>
          <Tag>{technology}</Tag>
        </li>
      ))}
      {technologies.length > TAGS_TO_DISPLAY && (
        <li className={styles.hint}>
          +{technologies.length - TAGS_TO_DISPLAY}
        </li>
      )}
    </ul>
  );
};
