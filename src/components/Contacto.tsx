import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, MapPin, Send, Check, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

/* ──────────────────────────────────────────────
   EmailJS config — replace with your real keys
   ────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID = "service_syup2kd";
const EMAILJS_TEMPLATE_ID = "template_dbcqepb";
const EMAILJS_PUBLIC_KEY = "__HS2qrfHIX7whtEu";

/* ──────────────────────────────────────────────
   Validation schema
   ────────────────────────────────────────────── */
const contactSchema = z.object({
  from_name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(80, "El nombre es demasiado largo.")
    .regex(
      /^[a-zA-ZÀ-ÿ\s'-]+$/,
      "El nombre solo puede contener letras y espacios."
    ),
  from_email: z
    .string()
    .min(1, "El email es obligatorio.")
    .email("Ingresá un email válido."),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(2000, "El mensaje es demasiado largo (máx. 2000 caracteres)."),
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormStatus = "idle" | "sending" | "success" | "error";

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
const Contacto = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  /* Honeypot — hidden field to catch basic bots */
  const [honeypot, setHoneypot] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched", // validates on blur for better UX
  });

  /* ── Submit handler ── */
  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check
    if (honeypot) return;

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.from_name,
          from_email: data.from_email,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      toast.success("¡Mensaje enviado!", {
        description: "Gracias por contactarme — te respondo pronto.",
      });
      reset();

      // Reset button back to idle after 3s
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      toast.error("No se pudo enviar el mensaje.", {
        description: "Revisá tu conexión e intentá de nuevo.",
      });

      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  /* ── Button content by status ── */
  const buttonContent: Record<FormStatus, React.ReactNode> = {
    idle: (
      <>
        Enviar Mensaje
        <Send className="w-4 h-4 ml-2 inline-block" />
      </>
    ),
    sending: (
      <>
        Enviando…
        <Loader2 className="w-4 h-4 ml-2 inline-block animate-spin" />
      </>
    ),
    success: (
      <>
        ¡Enviado!
        <Check className="w-4 h-4 ml-2 inline-block" />
      </>
    ),
    error: <>Intentar de nuevo</>,
  };

  /* ── Field error helper ── */
  const fieldErrorClasses = (hasError: boolean) =>
    hasError
      ? "border-red-400/60 focus:ring-red-400/30"
      : "border-emerald-950/10 focus:ring-emerald-800/20";

  return (
    <section id="contacto" className="relative w-full bg-[#f8faf7]">
      {/* Top gradient - blends with Bio wave divider */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-emerald-950 via-emerald-950/60 to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* CTA headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="font-heading italic text-emerald-950 text-4xl md:text-5xl lg:text-6xl tracking-[-0.04em] leading-[0.95] text-center max-w-3xl mx-auto mb-16"
        >
          Construyamos un futuro mas verde juntos.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Col 1 - Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="liquid-glass-strong rounded-[2.25rem] p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading italic text-emerald-950 text-3xl md:text-4xl tracking-[-0.03em] leading-none">
                Contactame
              </h3>

              <div className="mt-8 flex flex-col gap-5">
                <a
                  href="https://www.linkedin.com/in/martina-belen-zanettini-stubelj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-emerald-950/80 hover:text-emerald-950 transition-colors group"
                >
                  <span className="liquid-glass rounded-full w-10 h-10 grid place-items-center shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4.5 h-4.5" />
                  </span>
                  <span className="font-light text-sm md:text-base">
                    linkedin.com/in/martina-belen-zanettini-stubelj
                  </span>
                </a>

                <a
                  href="mailto:zanettini.martina.stubelj@gmail.com"
                  className="flex items-center gap-3 text-emerald-950/80 hover:text-emerald-950 transition-colors group"
                >
                  <span className="liquid-glass rounded-full w-10 h-10 grid place-items-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4.5 h-4.5" />
                  </span>
                  <span className="font-light text-sm md:text-base">
                    zanettini.martina.stubelj@gmail.com
                  </span>
                </a>

                <div className="flex items-center gap-3 text-emerald-950/80">
                  <span className="liquid-glass rounded-full w-10 h-10 grid place-items-center shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </span>
                  <span className="font-light text-sm md:text-base">
                    Buenos Aires, Argentina
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-10 text-emerald-950/50 text-xs font-light">
              Respondo en un plazo de 24-48 horas.
            </p>
          </motion.div>

          {/* Col 2 - Contact form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="liquid-glass-strong rounded-[2.25rem] p-8 md:p-10 flex flex-col gap-5"
            noValidate
          >
            {/* ── Nombre ── */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="text-xs uppercase tracking-[0.2em] text-emerald-950/50 font-medium"
              >
                Nombre
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre"
                {...register("from_name")}
                className={`w-full rounded-2xl border bg-white/40 px-5 py-3 text-base text-emerald-950 font-light placeholder:text-emerald-950/30 focus:outline-none focus:ring-2 transition-shadow ${fieldErrorClasses(!!errors.from_name)}`}
              />
              <AnimatePresence mode="wait">
                {errors.from_name && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-xs text-red-500 font-light mt-0.5"
                  >
                    {errors.from_name.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ── Email ── */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="text-xs uppercase tracking-[0.2em] text-emerald-950/50 font-medium"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="tu@email.com"
                {...register("from_email")}
                className={`w-full rounded-2xl border bg-white/40 px-5 py-3 text-base text-emerald-950 font-light placeholder:text-emerald-950/30 focus:outline-none focus:ring-2 transition-shadow ${fieldErrorClasses(!!errors.from_email)}`}
              />
              <AnimatePresence mode="wait">
                {errors.from_email && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-xs text-red-500 font-light mt-0.5"
                  >
                    {errors.from_email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ── Mensaje ── */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="text-xs uppercase tracking-[0.2em] text-emerald-950/50 font-medium"
              >
                Mensaje
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Contame sobre tu proyecto..."
                {...register("message")}
                className={`w-full rounded-2xl border bg-white/40 px-5 py-3 text-base text-emerald-950 font-light placeholder:text-emerald-950/30 focus:outline-none focus:ring-2 transition-shadow resize-none ${fieldErrorClasses(!!errors.message)}`}
              />
              <AnimatePresence mode="wait">
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-xs text-red-500 font-light mt-0.5"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ── Honeypot (hidden, anti-bot) ── */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                opacity: 0,
                height: 0,
                width: 0,
                overflow: "hidden",
              }}
            />

            {/* ── Submit button ── */}
            <motion.button
              type="submit"
              disabled={status === "sending" || status === "success"}
              whileTap={{ scale: 0.97 }}
              className={`mt-2 w-full rounded-full py-3.5 text-sm font-medium transition-all duration-300 flex items-center justify-center ${status === "success"
                ? "bg-green-600 text-white"
                : status === "error"
                  ? "bg-red-500/90 text-white hover:bg-red-500"
                  : "bg-emerald-950 text-white hover:bg-emerald-900"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {buttonContent[status]}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
