import React from "react";

import { Navbar } from "@/components/navbar";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function LoginPage() {
  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden antialiased min-h-screen flex flex-col">
      <Navbar />
      <Section className="flex-grow flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold">Login Page</h1>
            <p className="mt-4 text-gray-600">
              This page demonstrates the reusable Navbar component state change.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
