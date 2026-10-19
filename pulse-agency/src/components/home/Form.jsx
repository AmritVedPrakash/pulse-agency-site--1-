
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const services = [
    "Brand Strategy",
    "Marketing Strategy & Media Buying",
    "Website Development",
    "Digital Marketing & Social Media",
    "Packaging Design",
    "Photography & Videography",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border-0 border-b border-[#aaa39d] bg-transparent px-0 py-1.5 text-sm text-[#292524] outline-none transition placeholder:text-[#b4aeaa] focus:border-[#d7aa26] focus:ring-0 sm:text-base";

  const labelClass =
    "mb-1 block text-xs font-medium text-[#77716e] sm:text-sm";

  const highlights = [
    "Creative Ideas",
    "Smart Strategy",
    "Real Growth",
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#ffdf78] px-5 py-5 sm:px-8 sm:py-7 lg:px-12 lg:py-8"
    >
      <div className="mx-auto grid max-w-[1450px] items-center gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">

        {/* Left Content */}
        <div className="flex flex-col justify-center py-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#79652f] sm:text-sm">
            Let's work together
          </p>

          <h2 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#48433c] sm:text-4xl xl:text-5xl">
            Not sure what your brand needs next?
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-[#29251f] sm:text-base sm:leading-7">
            Book a free 15-minute call with our team to discuss
            your goals, challenges, and growth opportunities.
          </p>

          {/* Hoverable Highlights */}
          <div className="mt-5 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="cursor-pointer rounded-full border border-[#a68c42]/40 bg-white/30 px-3 py-1.5 text-xs font-medium text-[#55472a] transition-all duration-300 ease-out hover:border-[#40030d] hover:bg-[#40030d] hover:text-white hover:shadow-md sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative overflow-hidden rounded-xl bg-[#fffdfb] p-5 shadow-[0_10px_35px_rgba(87,65,14,0.08)] sm:p-6 lg:p-7">
          {/* Subtle Decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full border-[25px] border-[#f8f3e8] opacity-50"
          />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative z-10 space-y-3.5"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name *
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                required
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address *
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={254}
                required
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelClass}>
                Contact Number *
              </label>

              <div className="flex items-center gap-3 border-b border-[#aaa39d] focus-within:border-[#d7aa26]">
                <select
                  name="country_code"
                  aria-label="Country code"
                  defaultValue="+91"
                  className="max-w-[95px] bg-transparent py-1.5 text-sm text-[#292524] outline-none"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+971">🇦🇪 +971</option>
                </select>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  autoComplete="tel-national"
                  minLength={7}
                  maxLength={15}
                  pattern="[0-9 ()+-]{7,15}"
                  title="Please enter a valid phone number."
                  required
                  className="min-w-0 flex-1 bg-transparent py-1.5 text-sm text-[#292524] outline-none placeholder:text-[#b4aeaa] sm:text-base"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className={labelClass}>
                Select Service *
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                required
                className="w-full rounded-sm border border-[#e8e2dc] bg-white px-3 py-2 text-sm text-[#292524] outline-none transition focus:border-[#d7aa26] focus:ring-1 focus:ring-[#d7aa26]"
              >
                <option value="" disabled>
                  Choose a service
                </option>

                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClass}>
                Additional Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={2}
                maxLength={2000}
                placeholder="Tell us about your project and requirements..."
                className="w-full resize-y border-0 border-b border-[#aaa39d] bg-transparent px-0 py-1.5 text-sm text-[#292524] outline-none transition placeholder:text-[#b4aeaa] focus:border-[#d7aa26] focus:ring-0"
              />
            </div>

            {/* Success / Error */}
            {status.message && (
              <div
                role="status"
                aria-live="polite"
                className={`rounded-lg px-3 py-2 text-sm ${
                  status.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex min-w-32 items-center justify-center gap-3 rounded-full border-2 border-[#ffdf78] bg-[#252525] px-7 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#40030d] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  Submit
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </>
              )}
            </button>

            <p className="text-[11px] leading-4 text-[#88817b]">
              Your information will only be used to respond to your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
