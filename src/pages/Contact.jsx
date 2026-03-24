import { useState } from "react";
import Header from "../components/Header";
import MobileSidebar from "../components/MobileSidebar";
import Footer from "../components/Footer";
import { config } from "../config";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = config;

  const whatsappLink = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.contactMessage)}`;

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className="min-h-screen pt-24 pb-16 px-5 bg-cover relative"
        style={{
          backgroundColor: theme.pageBg,
          backgroundImage: `url('${config.contactBgImage.extra1}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-3xl mx-auto relative z-10">
          {/* Page heading */}
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4 mt-4"
              style={{ color: theme.light }}
            >
              Get In Touch
            </h1>
            <p
              className="text-md max-w-md mx-auto"
              style={{ color: theme.light }}
            >
              Have a question about a product or want to place a bulk order?
              Reach out to us directly on WhatsApp.
            </p>
          </div>

          {/* Main CTA card */}
          <div
            className="rounded-2xl p-8 md:p-12 text-center mb-8"
            style={{ backgroundColor: theme.dark }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.228A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.31-.726-5.993-1.957l-.418-.312-3.06.805.82-2.993-.342-.543A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Chat with us on WhatsApp
            </h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Tap the button below and you'll be taken straight to our WhatsApp.
              We typically reply within minutes.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#25D366" }}
            >
              Start a Conversation
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Info cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <div
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.border,
              }}
            >
              <h3
                className="font-semibold text-lg mb-2"
                style={{ color: theme.dark }}
              >
                Business Hours
              </h3>
              <div className="space-y-1 text-sm" style={{ color: theme.muted }}>
                <p>Monday – Saturday: 8:00 AM – 8:00 PM</p>
                <p>Sunday: 10:00 AM – 5:00 PM</p>
              </div>
            </div>
            <div
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.border,
              }}
            >
              <h3
                className="font-semibold text-lg mb-2"
                style={{ color: theme.dark }}
              >
                How To Get Your Order
              </h3>
              <div className="space-y-1 text-sm" style={{ color: theme.muted }}>
                <p>
                  Pickup from our address "No 4 Evo Crescent, GRA, Port
                  Harcourt."
                </p>
                <p>
                  Bulk orders qualify for delivery — ask us on WhatsApp for
                  details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
