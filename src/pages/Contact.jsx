import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-cyan-400">GET IN TOUCH</p>

          <h2 className="text-4xl font-black md:text-5xl">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Loyihangiz haqida gaplashmoqchimisiz? Quyidagi forma orqali
            menga xabar yuboring.
          </p>
        </div>

        {/* Contact content */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <h3 className="mb-6 text-2xl font-bold">
              Let's <span className="text-cyan-400">Talk</span>
            </h3>

            <div className="space-y-5">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-gray-400">Email</p>
                <p className="mt-1 font-semibold">
                  sobir@example.com
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="mt-1 font-semibold">
                  +998 90 123 45 67
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-gray-400">Location</p>
                <p className="mt-1 font-semibold">
                  Tashkent, Uzbekistan
                </p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <div className="mb-5">
              <label className="mb-2 block text-sm text-gray-300">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm text-gray-300">
                Your Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm text-gray-300">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;