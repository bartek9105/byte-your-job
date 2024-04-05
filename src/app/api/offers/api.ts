import { Offer } from "../../types/Offer";
import { createClient } from "../../utils/supabase/server";

export const getOffers = async () => {
  const supabase = createClient();

  const { data: offers } = await supabase
    .from("offers")
    .select()
    .returns<Offer[]>();

  return offers;
};
