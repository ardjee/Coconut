import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: { absolute: "Coconut Beach — Beach Resort on Lake Victoria, Uganda" },
  description:
    "Coconut Beach is a lakeside resort in Majanji, Uganda. Rooms with lake view, camping, pool, restaurant, boat cruises and weddings on the shores of Lake Victoria.",
};

export default function Page() {
  return <HomeClient />;
}
