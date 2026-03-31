import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name}. ${form.message}. My number: ${form.phone}`;
    window.open(`https://wa.me/916303889740?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-black">
            Get In <span className="text-gradient-red">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-muted-foreground text-sm">
                    1st Floor, Pillar No 86, Sophria Plaza, beside Sophria Private Limited,
                    13-6-431/D/88, Moghal Nagar, Gudimalkapur, Hyderabad, Telangana 500006
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+916303889740" className="hover:text-primary transition-colors">+91 63038 89740</a>
                    <br />
                    <a href="tel:+918341387090" className="hover:text-primary transition-colors">+91 83413 87090</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:sportlifegymofficial@gmail.com" className="hover:text-primary transition-colors">
                      sportlifegymofficial@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe
                title="Sport Life Fitness Club Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.43!3d17.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIyJzQ4LjAiTiA3OMKwMjUnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Book a Free Trial</h3>
              <p className="text-muted-foreground text-sm mb-8">
                Fill the form and we'll reach out to schedule your free session!
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    maxLength={15}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="contact-msg" className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="I'm interested in joining the gym..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-gym-red-glow transition-colors"
                >
                  <Send className="w-5 h-5" />
                  {submitted ? "Sent! ✓" : "Send via WhatsApp"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
