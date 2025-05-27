import { Metadata } from "next";

import React from "react";
import MainTemplate from "@/components/templates/main-template";

export const metadata: Metadata = {
  title: "Atlanta Home Remodeling | Home Renovation Services",
  description:
    "Expert home remodeling and renovation services in Atlanta. Transform your space with our skilled team.",
};

export default function Home() {
  return (
    <main>
      <MainTemplate />
    </main>
  );
}
