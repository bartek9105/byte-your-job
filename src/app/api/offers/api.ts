import { Offer } from "../../types/Offer";
import { createClient } from "../../utils/supabase/server";

export const getOffers = async (searchParams?: {
  sortBy?: "mostRecent" | "highestSalary";
}) => {
  const supabase = createClient();

  const { data: offers } = await supabase
    .from("offers")
    .select()
    .order("createdAt", {
      ascending: searchParams?.sortBy !== "mostRecent",
    })
    .order("salaryMax", {
      ascending: searchParams?.sortBy === "highestSalary",
    })
    .returns<Offer[]>();

  return offers;
};
