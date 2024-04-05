import { PropsWithChildren } from "react";
import styles from "./Tag.module.scss";

export const Tag = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};
