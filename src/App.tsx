/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { Reviews } from "./components/Reviews";
import { Gallery } from "./components/Gallery";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30 selection:text-orange-200">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Pricing />
          <Gallery />
          <Reviews />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
