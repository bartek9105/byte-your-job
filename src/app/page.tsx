import { getOffers } from "./api/offers/api";
import { OffersSlider } from "./components/OffersSlider/OffersSlider";
import styles from "./page.module.css";

export default async function Home() {
  const offers = await getOffers();

  return (
    <main className={styles.main}>
      {offers ? <OffersSlider offers={offers} title="Promoted" /> : null}
      {offers ? <OffersSlider offers={offers} title="Most recent" /> : null}
    </main>
  );
}
