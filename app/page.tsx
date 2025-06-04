"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { WagmiConfig, createConfig, http } from "wagmi";
import { base } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme, ConnectButton } from "@rainbow-me/rainbowkit";
import {
  CrossmintProvider,
  CrossmintEmbeddedCheckout,
} from "@crossmint/client-sdk-react-ui";

// ---------- Wagmi + RainbowKit --------------------
const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected({ target: "metaMask" })],
  transports: { [base.id]: http() },
});

const queryClient = new QueryClient();

// --------------------------------------------------
// ENV VARS -----------------------------------------
// --------------------------------------------------
const LAUNCH_DATE = new Date("2025-06-15T00:00:00-07:00").getTime();

// Manifold claim URLs (crypto mint)
const URL_FREE = "https://app.manifold.xyz/c/frontier-forge-free-trial";
const URL_BUILDER = "https://app.manifold.xyz/c/frontier-forge-builder-pass";
const URL_VIP = "https://app.manifold.xyz/c/frontier-forge-vip-pass";

// Crossmint (fiat & crypto) env
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const CROSSMINT_API_KEY = process.env.NEXT_PUBLIC_CROSSMINT_API_KEY;
const isCrossmintEnabled = !!CONTRACT_ADDRESS && !!CROSSMINT_API_KEY;
const COLLECTION_LOCATOR = isCrossmintEnabled ? `crossmint:${CONTRACT_ADDRESS}` : '';

// Token IDs (per Manifold Editions)
const TOKEN_FREE = 0;
const TOKEN_BUILDER = 400;
const TOKEN_VIP = 2400;

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [chosenToken, setChosenToken] = useState<number | null>(null); // opens Crossmint

  useEffect(() => setIsMounted(true), []);

  // countdown
  useEffect(() => {
    const t = setInterval(() => {
      const diff = LAUNCH_DATE - Date.now();
      if (diff < 0) return clearInterval(t);
      const d = Math.floor(diff / 86_400_000);
      const h = Math.floor((diff % 86_400_000) / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1_000);
      setTimeLeft(`${d}d ${h}h ${m}m ${s}s`);
    }, 1000);
    return () => clearInterval(t);
  }, []);

  // modal overlay for Crossmint
  const Modal = ({ children }: { children: React.ReactNode }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-4 w-full max-w-md">{children}</div>
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={() => setChosenToken(null)}
      >×</button>
    </div>
  );

  if (!isMounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider theme={darkTheme()}>
        <Head>
          {/* Primary SEO */}
          <title>Frontier Maker Space • San Francisco Hardware & Edge-AI Lab | General Lithium HQ (Non-Profit)</title>
          <meta
            name="description"
            content="Frontier Maker Space—run by General Lithium HQ, a 501(c)(3) nonprofit in SoMa—offers 24/7 access to lasers, CNC, edge-AI rigs & battery labs on the 7th floor of 995 Market St, Frontier Tower."
          />
          <meta
            name="keywords"
            content="San Francisco makerspace, SoMa hardware lab, General Lithium HQ, Frontier Tower 995 Market, edge AI robots, battery research, energy storage prototyping, nonprofit makerspace SF, deep tech startup space"
          />

          {/* Open Graph / Twitter */}
          <meta property="og:type"        content="website" />
          <meta property="og:title"       content="Mint a Frontier Forge Pass • 24/7 SF Makerspace Access" />
          <meta property="og:description" content="Get your NFT key to General Lithium HQ’s nonprofit makerspace: lasers, edge-AI, battery cyclers & rooftop demo nights in downtown SF." />
          <meta property="og:url"         content="https://general-lithium-hq.com" />

          {/* Structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://general-lithium-hq.com/#org",
                name: "General Lithium HQ",
                legalName: "GLHQ Inc.",
                description:
                  "501(c)(3) nonprofit operating the Frontier Maker Space on the 7th floor of Frontier Tower (995 Market St, San Francisco). Focus areas: hardware, edge-AI, batteries, deep-tech prototyping.",
                url: "https://general-lithium-hq.com",
                location: {
                  "@type": "Place",
                  name: "Frontier Maker Space",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "995 Market St, 7th Floor",
                    addressLocality: "San Francisco",
                    addressRegion: "CA",
                    postalCode: "94103",
                    addressCountry: "US"
                  }
                }
              })
            }}
          />
        </Head>


          <div className="min-h-screen bg-black text-white font-sans">
            {/* NAV */}
            <nav className="flex justify-between items-center p-4 bg-black/60 backdrop-blur sticky top-0 z-50">
              <h1 className="text-2xl font-bold">GLHQ</h1>
              <ConnectButton chainStatus="icon" showBalance={false} />
            </nav>

            {/* HERO */}
            <header className="relative text-center py-32 bg-[radial-gradient(circle_at_center,theme(colors.blue.900)_0%,theme(colors.black)_100%)] overflow-hidden">
              {/* pulsing light overlay */}
              <div className="absolute inset-0 animate-pulse-slow [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[conic-gradient(from_0deg,transparent_0_30%,rgba(255,255,255,0.05)_30_60%,transparent_60_100%)]"></div>

              <h2 className="relative text-6xl md:text-7xl font-extrabold drop-shadow-[0_0_10px_theme(colors.blue.400)]">Frontier&nbsp;Forge&nbsp;Pass</h2>
              <p className="relative mt-6 text-2xl max-w-4xl mx-auto leading-snug">
                Unlock <span className="text-blue-400">24/7</span> laser‑cutters, midnight snack‑bot credits, member‑only hackathons &amp; a
                <span className="text-blue-400"> rapidly growing</span> maker community — all with one NFT key.
              </p>
              <ul className="relative mt-8 flex flex-col md:flex-row justify-center gap-6 text-lg font-semibold">
                <li>🔒 Door + machine authentication</li>
                <li>🍫 Vending & consumable perks</li>
                <li>🎟️ Rooftop demo‑days & socials</li>
              </ul>
              {timeLeft && (
                <div className="relative mt-10 text-4xl font-mono">Mint your Pass now!</div>
              )}
              {/* <button
                onClick={() => document.getElementById("tiers")?.scrollIntoView({ behavior: "smooth" })}
                className="relative mt-10 coin-button text-xl px-10 py-4"
              >Choose your pass ↓</button> */}
            </header>

            <section className="px-8 py-16 bg-black text-gray-300 text-left">
              <h2 className="text-3xl font-bold mb-4">A nonprofit makerspace in SoMa—built for deep-tech</h2>

              <p className="max-w-5xl leading-relaxed mb-6">
                <strong>General Lithium HQ (EIN 99-4582316)</strong> is a registered 501(c)(3) nonprofit on a mission to democratize
                hard-tech innovation in San Francisco. Our flagship <strong>Frontier Maker Space</strong> spans the entire 7<sup>th</sup>
                floor of <strong>Frontier Tower, 995 Market St</strong>—steps from Powell BART in the heart of SoMa.
              </p>

              <p className="max-w-5xl leading-relaxed mb-6">
                Builders here prototype next-gen <em>edge-AI robotics</em>, test <em>high-density battery packs</em>, and fabricate
                precision hardware faster than anywhere else in the Bay. Lasers, CNC, Jetson Orin clusters, battery cyclers,
                high-temp reflow and a full E-lab are online 24/7—secured by on-chain authentication via the Frontier Forge Pass NFT.
              </p>

              <p className="max-w-5xl leading-relaxed">
                Every mint directly funds youth workshops, open-source hardware grants, and free community events. Join 350 +
                founders, engineers and scientists who call GLHQ home—and claim your spot in SF’s only makerspace that fuses
                <strong> hardware, AI, and energy-tech under one skyline.</strong>
              </p>
            </section>

            {/* TIERS */}
            <section className="py-20 px-8 bg-gradient-to-r from-blue-900 via-black to-blue-900">
              <div className="container mx-auto text-center">
                <h3 className="text-4xl glow-effect mb-12">Choose Your Pass</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <TierCard
                    title="Free Trial (7 days)"
                    description={["Full 24/7 makerspace access for 7 days","Golden ticket to one flagship event","Instant Discord ★ Forge Trial★ badge"]}
                    ethHref={URL_FREE}
                    cardAction={() => isCrossmintEnabled ? setChosenToken(TOKEN_FREE) : window.open(URL_FREE, '_blank')}
                    buttonEth="Mint Free (ETH)"
                    buttonCard={isCrossmintEnabled ? "Card / Apple Pay" : undefined}
                  />
                  <TierCard
                    title="Builder"
                    description={["Unlimited 24/7 entry for one","Front‑row seat at every monthly Hack‑Jam","20% off laser, CNC & snack‑bot munchies"]}
                    ethHref={URL_BUILDER}
                    cardAction={() => isCrossmintEnabled ? setChosenToken(TOKEN_BUILDER) : window.open(URL_BUILDER, '_blank')}
                    buttonEth="Mint 0.15 ETH"
                    buttonCard={isCrossmintEnabled ? "Pay with Card" : undefined}
                  />
                  <TierCard
                    title="VIP Duo"
                    description={["Everything in Builder—plus","Always‑on +1 guest privilege","Quarterly rooftop chef's dinner & investor mixer"]}
                    ethHref={URL_VIP}
                    cardAction={() => isCrossmintEnabled ? setChosenToken(TOKEN_VIP) : window.open(URL_VIP, '_blank')}
                    buttonEth="Mint 0.30 ETH"
                    buttonCard={isCrossmintEnabled ? "Pay with Card" : undefined}
                    highlight
                  />
                </div>
              </div>
            </section>

            {/* ­­­­­­­­­­­­­­­­­­­­­­­­­­­­  SUPPORT GLHQ  — monthly donors  */}
            <section className="py-20 px-8 bg-black text-center" id="donate">
              <h3 className="text-4xl font-bold glow-effect mb-4 text-white">
                Fuel the Mission → Become a Monthly Supporter
              </h3>
              <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-12 leading-relaxed">
                Your recurring gift keeps our nonprofit makerspace open to students, under-represented founders
                and the broader SF hardware scene. Associates and Members unlock <em>exclusive videos, behind-the-scenes
                project drops, and invite-only socials</em> across our partner spaces city-wide.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {/* Associate — $100/mo */}
                <div className="bg-blue-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
                  <h4 className="text-2xl font-bold mb-3 text-white">GLHQ Associate</h4>
                  <ul className="text-left text-gray-200 space-y-2 mb-6">
                    <li>✅ Early access to workshop sign-ups</li>
                    <li>✅ Private Discord channel + AMAs</li>
                    <li>✅ One guest-pass per month</li>
                  </ul>
                  <a
                    href="https://buy.stripe.com/00geYxflbg20ejKfYZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coin-button w-full block"
                  >
                    Donate $100 / month
                  </a>
                </div>

                {/* Member — $200/mo */}
                <div className="bg-purple-900/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border-2 border-purple-400">
                  <h4 className="text-2xl font-bold mb-3 text-white">GLHQ Member</h4>
                  <ul className="text-left text-gray-200 space-y-2 mb-6">
                    <li>✨ All Associate perks</li>
                    <li>✨ VIP seating at quarterly Demo Nights</li>
                    <li>✨ Private lab tours & beta-tester invites</li>
                  </ul>
                  <a
                    href="https://buy.stripe.com/00g03D6OFaHG3F6eUU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coin-button w-full block"
                  >
                    Donate $200 / month
                  </a>
                </div>
              </div>
            </section>

            <footer className="text-center py-8 bg-black/90 text-gray-400 text-sm">
              {new Date().getFullYear()} General Lithium HQ — Frontier Forge Pass
            </footer>
          </div>

          {/* Crossmint modal */}
          {isCrossmintEnabled && chosenToken !== null && (
            <Modal>
              <CrossmintProvider apiKey={CROSSMINT_API_KEY!}>
                <CrossmintEmbeddedCheckout
                  lineItems={{
                    collectionLocator: COLLECTION_LOCATOR!,
                    callData: {
                      tokenId: chosenToken.toString(),
                      quantity: 1
                    }
                  }}
                  payment={{
                    crypto: { enabled: true },
                    fiat: {
                      enabled: true,
                      allowedMethods: { card: true, applePay: true, googlePay: true },
                    },
                  }}
                />
              </CrossmintProvider>
            </Modal>
          )}
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}

interface CardProps {
  title: string;
  description: string[];
  ethHref: string;
  cardAction: () => void;
  buttonEth: string;
  buttonCard: string | undefined;
  highlight?: boolean;
}

function TierCard({ title, description, ethHref, cardAction, buttonEth, buttonCard, highlight }: CardProps) {
  return (
    <div className={`bg-black/70 p-6 rounded-2xl shadow-lg backdrop-blur-lg ${highlight ? "border-2 border-blue-400" : ""}`}>      
      <h4 className="text-2xl font-bold mb-4 glow-effect">{title}</h4>
      <ul className="space-y-2 text-left text-lg">
        {description.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <div className="flex flex-col gap-3 mt-6">
        <a href={ethHref} target="_blank" rel="noopener noreferrer" className="coin-button w-full text-center">
          {buttonEth}
        </a>
        {buttonCard && (
          <button onClick={cardAction} className="coin-button w-full bg-blue-600 hover:bg-blue-700">
            {buttonCard}
          </button>
        )}
      </div>
    </div>
  );
}
