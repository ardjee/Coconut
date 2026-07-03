import type { Metadata } from "next";
import FishAndChipsClient from "./FishAndChipsClient";

export const metadata: Metadata = {
  title: "Fish & Chips Restaurant",
  description:
    "Fresh fish and chips at Coconut Beach — Lake Victoria tilapia served lakeside at our resort restaurant in Majanji, Uganda.",
};

export default function Page() {
  return <FishAndChipsClient />;
}
