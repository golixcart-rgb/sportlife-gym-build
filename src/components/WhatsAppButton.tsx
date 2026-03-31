import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/916303889740"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 animate-pulse-glow"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="w-7 h-7 text-foreground" style={{ color: "white" }} />
    </a>
  );
};

export default WhatsAppButton;
