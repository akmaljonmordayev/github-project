import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-[#263238] text-[#E4E7E7]">

      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#4F7942]/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#6B7377]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">

          <div>
            <span className="inline-block rounded-full border border-[#4F7942]/50 bg-[#4F7942]/10 px-5 py-2 text-sm font-semibold text-[#8FBC8F]">
              ABOUT SHOPHUB
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              More Than
              <span className="block text-[#8FBC8F]">Just Shopping.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#B8BEC1]">
              ShopHub is a modern shopping experience created for people who
              want quality products, simple navigation and a beautiful digital
              experience — all in one place.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#story"
                className="rounded-xl bg-[#4F7942] px-7 py-3.5 font-bold text-white shadow-lg shadow-[#4F7942]/20 transition hover:-translate-y-1 hover:bg-[#5C8A4D]"
              >
                Discover Our Story
              </a>

              <a
                href="#values"
                className="rounded-xl border border-[#6B7377] px-7 py-3.5 font-bold text-[#E4E7E7] transition hover:border-[#8FBC8F] hover:text-[#8FBC8F]"
              >
                Our Values
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#6B7377]/30 bg-[#20292D] p-5 shadow-2xl">
              <div className="rounded-[1.5rem] border border-[#6B7377]/20 bg-gradient-to-br from-[#4F7942] to-[#263238] p-10">

                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-[#263238]/80 p-6 backdrop-blur">
                    <div className="text-4xl font-black text-[#8FBC8F]">
                      20+
                    </div>
                    <p className="mt-2 text-sm text-[#B8BEC1]">
                      Products
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#263238]/80 p-6 backdrop-blur">
                    <div className="text-4xl font-black text-[#8FBC8F]">
                      100%
                    </div>
                    <p className="mt-2 text-sm text-[#B8BEC1]">
                      Quality Focus
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#263238]/80 p-6 backdrop-blur">
                    <div className="text-4xl font-black text-[#8FBC8F]">
                      24/7
                    </div>
                    <p className="mt-2 text-sm text-[#B8BEC1]">
                      Online Access
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#263238]/80 p-6 backdrop-blur">
                    <div className="text-4xl font-black text-[#8FBC8F]">
                      ∞
                    </div>
                    <p className="mt-2 text-sm text-[#B8BEC1]">
                      Possibilities
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl border border-[#8FBC8F]/20 bg-[#4F7942]/20 blur-sm" />
            <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full border border-[#6B7377]/30" />
          </div>

        </div>
      </section>

      {/* STORY */}
      <section id="story" className="border-y border-[#6B7377]/20 bg-[#20292D] py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#8FBC8F]">
              Our Story
            </span>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Built around a simple idea.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#B8BEC1]">
              Shopping should not feel complicated. We believe that users
              deserve a platform where discovering products feels natural,
              fast and enjoyable.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="group rounded-3xl border border-[#6B7377]/20 bg-[#263238] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#4F7942]/60">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F7942]/15 text-2xl">
                ✦
              </div>

              <p className="text-sm font-bold text-[#8FBC8F]">
                01 — IDEA
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Start Simple
              </h3>

              <p className="mt-4 leading-7 text-[#9EA7AA]">
                We started with one goal: create a clean and understandable
                shopping interface for everyone.
              </p>
            </div>

            <div className="group rounded-3xl border border-[#6B7377]/20 bg-[#263238] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#4F7942]/60">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F7942]/15 text-2xl">
                ◈
              </div>

              <p className="text-sm font-bold text-[#8FBC8F]">
                02 — DESIGN
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Think Different
              </h3>

              <p className="mt-4 leading-7 text-[#9EA7AA]">
                Every section is designed to make finding information easier
                while keeping the experience modern and elegant.
              </p>
            </div>

            <div className="group rounded-3xl border border-[#6B7377]/20 bg-[#263238] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#4F7942]/60">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F7942]/15 text-2xl">
                ↗
              </div>

              <p className="text-sm font-bold text-[#8FBC8F]">
                03 — FUTURE
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Keep Growing
              </h3>

              <p className="mt-4 leading-7 text-[#9EA7AA]">
                ShopHub is designed to grow with new products, features and
                better experiences.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#8FBC8F]">
              What We Believe
            </span>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Our core values
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#9EA7AA]">
              These principles guide the way we design, build and improve
              ShopHub.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "01",
                title: "Simplicity",
                text: "Everything should be easy to understand and easy to use.",
              },
              {
                icon: "02",
                title: "Quality",
                text: "We focus on creating an experience that feels reliable.",
              },
              {
                icon: "03",
                title: "Innovation",
                text: "We continuously look for better ways to solve problems.",
              },
              {
                icon: "04",
                title: "People First",
                text: "The experience always starts with the user.",
              },
            ].map((item) => (
              <div
                key={item.icon}
                className="rounded-3xl border border-[#6B7377]/20 bg-[#20292D] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#4F7942]"
              >
                <span className="text-5xl font-black text-[#4F7942]/40">
                  {item.icon}
                </span>

                <h3 className="mt-8 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#9EA7AA]">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="bg-[#4F7942] py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <div className="text-5xl font-black text-white">20+</div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-white/70">
                Products
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-white">4.9</div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-white/70">
                Experience
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-white">100%</div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-white/70">
                Dedication
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-white">∞</div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-white/70">
                Ideas
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-[#20292D] py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#8FBC8F]">
                The Experience
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Designed to feel
                <span className="text-[#8FBC8F]"> effortless.</span>
              </h2>

              <p className="mt-6 leading-8 text-[#9EA7AA]">
                From the first click to discovering a product, every part of
                ShopHub is focused on keeping the journey clear and enjoyable.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4F7942] font-bold">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold">Clean navigation</h3>
                    <p className="mt-1 text-sm leading-6 text-[#9EA7AA]">
                      Find what you need without unnecessary complexity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4F7942] font-bold">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold">Modern interface</h3>
                    <p className="mt-1 text-sm leading-6 text-[#9EA7AA]">
                      A visual system designed to feel premium and consistent.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4F7942] font-bold">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold">Responsive everywhere</h3>
                    <p className="mt-1 text-sm leading-6 text-[#9EA7AA]">
                      A comfortable experience across different screen sizes.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-[#6B7377]/30 bg-[#263238] p-8">

                <div className="rounded-2xl bg-[#20292D] p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">ShopHub Experience</span>
                    <span className="rounded-full bg-[#4F7942]/20 px-3 py-1 text-xs text-[#8FBC8F]">
                      Premium
                    </span>
                  </div>

                  <div className="mt-10 space-y-5">
                    <div className="h-3 overflow-hidden rounded-full bg-[#6B7377]/20">
                      <div className="h-full w-[92%] rounded-full bg-[#4F7942]" />
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-[#6B7377]/20">
                      <div className="h-full w-[84%] rounded-full bg-[#8FBC8F]" />
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-[#6B7377]/20">
                      <div className="h-full w-[96%] rounded-full bg-[#4F7942]" />
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-[#263238] p-4 text-center">
                      <span className="text-xl font-black">A+</span>
                      <p className="mt-1 text-xs text-[#9EA7AA]">
                        Design
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#263238] p-4 text-center">
                      <span className="text-xl font-black">Fast</span>
                      <p className="mt-1 text-xs text-[#9EA7AA]">
                        Speed
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#263238] p-4 text-center">
                      <span className="text-xl font-black">Easy</span>
                      <p className="mt-1 text-xs text-[#9EA7AA]">
                        UX
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F7942] via-[#263238] to-[#20292D]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#B8D8B8]">
            Welcome to ShopHub
          </span>

          <h2 className="mt-6 text-4xl font-black sm:text-6xl">
            The journey starts here.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#D5DBDC]">
            Explore our collection and discover a shopping experience built
            around simplicity, quality and modern design.
          </p>

          <a
            href="#top"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-[#263238] shadow-xl transition hover:-translate-y-1 hover:bg-[#E4E7E7]"
          >
            Explore ShopHub →
          </a>

        </div>
      </section>

    </div>
  );
}

export default About;

