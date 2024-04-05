"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FiltersButton } from "../FiltersButton/FiltersButton";
import styles from "./QuickFilters.module.scss";

interface QuickFiltersProps {
  filter: string;
  values: {
    name: string;
    displayName: string;
  }[];
}

export const QuickFilters = ({ filter, values }: QuickFiltersProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const handleFilterChange = (value: string) => {
    params.set(filter, value);
    replace(`${pathname}?${params.toString()}`);
  };

  const param = searchParams.get(filter);

  return (
    <ul className={styles.container}>
      {values.map(({ name, displayName }, index) => (
        <li key={index}>
          <FiltersButton
            isActive={param === name}
            onClick={() => handleFilterChange(name)}
          >
            {displayName}
          </FiltersButton>
        </li>
      ))}
    </ul>
  );
};
