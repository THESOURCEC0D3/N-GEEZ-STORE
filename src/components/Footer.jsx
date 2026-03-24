import { config } from "../config";

const Footer = () => {
  const { theme } = config;

  return (
    <div className="p-6 text-center border-t" style={{ backgroundColor: theme.pageBg, borderColor: theme.border }}>
      <p className="text-sm" style={{ color: theme.muted }}>
        © 2026 {config.footerName}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
