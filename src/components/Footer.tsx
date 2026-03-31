import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gym-dark border-t border-border">
      <div className="container mx-auto py-14 px-4 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold mb-4">
              SPORT<span className="text-primary">LIFE</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Unisex Fitness Club specializing in Bodybuilding & Cardio. Your ultimate fitness destination in Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home", "About", "Services", "Plans", "Trainers", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                +91 63038 89740
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                sportlifegymofficial@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                Near Attapur Ring Road, Hyderabad
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <a
              href="https://instagram.com/sportlifefitnessclub_hyd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @sportlifefitnessclub_hyd
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Sport Life Fitness Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
