import { getOffers } from "./api/offers/api";
import { OffersList } from "./components/Offers/OffersList/OffersList";
import { OffersSlider } from "./components/Offers/OffersSlider/OffersSlider";
import styles from "./page.module.css";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    sortBy?: "mostRecent" | "highestSalary";
  };
}) {
  const offers = await getOffers(searchParams);

  return (
    <main className={styles.main}>
      {offers ? <OffersSlider offers={offers} title="Promoted" /> : null}
      {offers ? <OffersSlider offers={offers} title="Most recent" /> : null}

      <OffersList offers={offers} activeFilters={searchParams} />
    </main>
  );
}
