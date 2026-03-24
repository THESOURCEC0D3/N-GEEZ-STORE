import { config } from "../config";

const Footer = () => {
  const { theme } = config;

  return (
    <div
      className="p-6 text-center border-t"
      style={{ backgroundColor: theme.pageBg, borderColor: theme.border }}
    >
      <h3 className="text-2xl text-black">No 4 Evo Crescent, GRA, Port Harcourt</h3>
      <p className="text-sm" style={{ color: theme.dark }}>
        © 2026 {config.footerName}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
