import { MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/917829776202?text=Hi%2C%20I%20would%20like%20to%20order%20tender%20coconuts";

const WhatsAppFloat = () => (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Order on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export { whatsappUrl };
export default WhatsAppFloat;
