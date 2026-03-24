import { createWhatsAppOrderLink } from "../../utils/whatsapp.js";
import { config } from "../../config";

const ProductCard = ({ product }) => {
  if (!product) return null;
  const { theme } = config;

  return (
    <div
      className="flex flex-col space-y-3 items-center justify-between rounded-2xl p-3 bg-gray-300 transition-all duration-300 z-10 cursor-pointer border hover:shadow-lg hover:-translate-y-1"
      style={{ borderColor: theme.border }}
    >
      {product.tag && (
        <span
          className="text-xs font-bold px-3 py-1 rounded-full text-white self-start"
          style={{ backgroundColor: theme.accent }}
        >
          {product.tag}
        </span>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-square rounded-xl object-cover"
      />
      <h2
        className="text-sm font-semibold text-center"
        style={{ color: theme.dark }}
      >
        {product.name}
      </h2>
      <p className="font-bold" style={{ color: theme.accent }}>
        {config.currency}
        {product.price.toLocaleString()}
      </p>
      <span
        className={`text-sm font-medium px-3 py-1 rounded-full ${
          product.inStock
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </span>

      {product.inStock ? (
        <a
          href={createWhatsAppOrderLink(product, config.whatsappNumber)}
          className="w-full text-center px-4 py-3 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: theme.accent }}
        >
          Order on WhatsApp
        </a>
      ) : (
        <span className="w-full text-center px-4 py-3 text-gray-400 bg-gray-100 rounded-xl text-sm cursor-not-allowed">
          Out of Stock
        </span>
      )}
    </div>
  );
};

export default ProductCard;
