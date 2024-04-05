import { HTMLAttributes } from "react";
import styles from "./FiltersButton.module.scss";
import cn from "classnames";

interface FiltersButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export const FiltersButton = ({
  children,
  isActive,
  ...rest
}: FiltersButtonProps) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.buttonActive]: isActive,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
