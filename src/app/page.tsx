import { OffersSlider } from "./components/OffersSlider/OffersSlider";
import { Offers } from "./constants/Offers";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <OffersSlider offers={Offers} title="Promoted" />
      <OffersSlider offers={Offers} title="Most recent" />
    </main>
  );
}
