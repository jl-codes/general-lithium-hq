import { useState, useEffect } from "react";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const LAUNCH_DATE = new Date("2025-06-15T00:00:00-07:00").getTime(); // adjust as needed
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
const CROSSMINT_CLIENT_ID = process.env.NEXT_PUBLIC_CROSSMINT_CLIENT_ID!;

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = LAUNCH_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft(null);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Frontier Forge Pass | GLHQ</title>
        <meta
          name="description"
          content="Token‑gated access to San Francisco’s premier AI & hardware makerspace—powered by General Lithium HQ"
        />
      </Head>
      <div className="min-h-screen bg-black text-white font-sans">
        {/* Top Navigation */}
        <nav className="flex justify-between items-center p-4 backdrop-blur-md bg-opacity-30 bg-black/50 sticky top-0 z-50">
          <h1 className="text-2xl font-bold">GLHQ</h1>
          <ConnectButton chainStatus="icon" showBalance={false} />
        </nav>

        {/* Hero Section */}
        <header className="text-center py-24 bg-gradient-to-r from-black via-blue-900 to-black">
          <h2 className="text-6xl font-extrabold glow-effect">Frontier Forge Pass</h2>
          <p className="mt-4 text-xl max-w-3xl mx-auto glow-effect">
            Your on‑chain key to 24/7 access, premium events, and a 350‑strong builder collective at
            Frontier Tower—powered by General Lithium HQ.
          </p>

          {timeLeft ? (
            <div className="mt-8 text-3xl font-mono glow-effect">Mint opens in {timeLeft}</div>
          ) : (
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
              {/* Crossmint Button handles credit‑card + crypto */}
              <CrossmintPayButton
                clientId={CROSSMINT_CLIENT_ID}
                environment="production"
                mintConfig={{
                  type: "erc-721",
                  totalPrice: "0.15",
                  _contractAddress: CONTRACT_ADDRESS,
                }}
                className="coin-button !py-4 !px-8 !text-xl"
              />
              {/* Backup Stripe (fiat) */}
              <a
                href="https://buy.stripe.com/YOUR_BUILDER_PASS_LINK"
                className="coin-button text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pay with Card
              </a>
            </div>
          )}
        </header>

        {/* Tiers Section */}
        <section className="py-16 px-8 bg-gradient-to-r from-blue-900 via-black to-blue-900">
          <div className="container mx-auto text-center">
            <h3 className="text-4xl glow-effect">Choose Your Pass</h3>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Builder */}
              <div className="bg-black/70 p-6 rounded-2xl shadow-lg backdrop-blur-lg">
                <h4 className="text-2xl font-bold mb-4 glow-effect">Builder</h4>
                <ul className="space-y-2 text-left text-lg">
                  <li>24/7 Makerspace entry (1 person)</li>
                  <li>Free access to monthly Crypto‑Hardware Jam</li>
                  <li>Discounts on consumables</li>
                </ul>
                <div className="mt-6">
                  <a href="#mint" className="coin-button">Mint 0.15 ETH</a>
                </div>
              </div>
              {/* VIP Duo */}
              <div className="bg-black/70 p-6 rounded-2xl shadow-lg backdrop-blur-lg border-2 border-blue-400">
                <h4 className="text-2xl font-bold mb-4 glow-effect">VIP Duo</h4>
                <ul className="space-y-2 text-left text-lg">
                  <li>All Builder perks</li>
                  <li>Bring a guest anytime</li>
                  <li>Quarterly penthouse chef dinner</li>
                </ul>
                <div className="mt-6">
                  <a href="#vip" className="coin-button">Mint 0.30 ETH</a>
                </div>
              </div>
              {/* Investor Annual */}
              <div className="bg-black/70 p-6 rounded-2xl shadow-lg backdrop-blur-lg">
                <h4 className="text-2xl font-bold mb-4 glow-effect">Investor Annual</h4>
                <ul className="space-y-2 text-left text-lg">
                  <li>Lifetime access (non‑transferable)</li>
                  <li>Logo on Founder Wall</li>
                  <li>First‑look deal‑flow demo days</li>
                </ul>
                <div className="mt-6">
                  <a href="#investor" className="coin-button">Mint 1 ETH</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsor CTA */}
        <section className="py-12 px-8 bg-black text-center">
          <h3 className="text-3xl glow-effect">Brands & VCs — Partner with Us</h3>
          <p className="mt-4 max-w-2xl mx-auto text-lg glow-effect">
            Align with 350 of SF’s top hardware & AI builders. Limited sponsor slots include logo placement, demo‑day booth, and social roll‑outs.
          </p>
          <a href="mailto:sponsors@general-lithium.com" className="coin-button mt-6">
            Request Sponsor Deck
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 bg-black/90">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} General Lithium HQ — Frontier Forge Pass</p>
        </footer>
      </div>
    </>
  );
}
