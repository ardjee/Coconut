import type { Metadata } from "next";
import BookClient from "./BookClient";

export const metadata: Metadata = {
  title: "Rates & Booking",
  description:
    "Room rates, camping prices and activity pricing at Coconut Beach on Lake Victoria, Uganda. Book directly via WhatsApp, phone or email — no surcharges.",
};

export default function Page() {
  return <BookClient />;
}
