import React from 'react';
// import { useState } from 'react';
import { Link } from "react-scroll";

import protectionOne from '../../assets/img/protection1.webp';
import protectionTwo from '../../assets/img/protection3.webp';
import protectionThree from '../../assets/img/range.webp';


/* The six services, matching the competencies on the new site's capability
   statement so the two describe the same business. Icons are inline strokes
   rather than an icon dependency — six small paths do not justify a package. */
const SERVICE_ICON = {
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  route: 'M6 3v12M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9v3a4 4 0 0 1-4 4h-4',
  key: 'M15 7a5 5 0 1 1-4.9 6H7v3H4v-3H2v-3h8.1A5 5 0 0 1 15 7z',
  vehicle: 'M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM19 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM3 17V9l2-4h9l3 4h3v8',
  alert: 'M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
};

const SERVICES = [
  { icon: 'shield', t: 'Armed Physical Security',
    p: 'Licensed, firearms-qualified officers for fixed posts in cash-handling, regulated and high-liability environments.' },
  { icon: 'user', t: 'Unarmed Physical Security',
    p: 'Uniformed officers for lobbies, gates and visitor control \u2014 visible deterrence and access oversight, 24/7.' },
  { icon: 'route', t: 'Patrol Services',
    p: 'Foot and mobile patrol on documented routes with recorded checkpoints, so coverage can be proven, not just claimed.' },
  { icon: 'key', t: 'Access Control',
    p: 'Entry screening, credential verification, visitor management and perimeter control for sites and facilities.' },
  { icon: 'vehicle', t: 'Patrol Vehicle Security',
    p: 'Marked-vehicle patrol, alarm response and after-hours property checks with GPS-verified routes.' },
  { icon: 'alert', t: 'Event & Emergency Response',
    p: 'Crowd management, incident response and emergency coordination for events, campuses and community venues.' },
];

export default function Services() {
  return (
    <>
      <section
        id="services"
        className="pt-12 lg:pt-[75px] pb-12 lg:pb-[75px] overflow-hidden bg-black"
      >
        <div className="container-ares">
          <div className="flex flex-wrap justify-between items-center -mx-4">
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full xl:w-1/2 px-3 sm:px-4">
                  <div className="py-3 sm:py-4">
                    <img
                      src={protectionOne}
                      alt="Women of Ares"
                      className="rounded-2xl w-full"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={protectionThree}
                      alt="Ares Group"
                      className="rounded-2xl w-full"
                    />
                  </div>
                </div>
                <div className="w-full xl:w-1/2 px-3 sm:px-4">
                  <div className="my-4 relative z-10">
                    <img
                      src={protectionTwo}
                      alt="Men of Ares"
                      className="rounded-2xl w-full"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width="134"
                        height="106"
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#99a090"
                        />
                        <circle
                          cx="16.3333"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#99a090"
                        />
                        <circle
                          cx="31"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#99a090"
                        />
                        <circle
                          cx="45.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#99a090"
                        />
                        <circle
                          cx="60.3334"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#99a090"
                        />
                        <circle
                          cx="88.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#99a090"
                        />
                        <circle
                          cx="117.667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#99a090"
                        />
                        <circle
                          cx="74.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#99a090"
                        />
                        <circle
                          cx="103"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#99a090"
                        />
                        <circle
                          cx="132"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#99a090"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="31"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#99a090"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#99a090"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#99a090"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#99a090"
                        />
                        <circle
                          cx="103"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#99a090"
                        />
                        <circle
                          cx="132"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#99a090"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#99a090"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#99a090"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="31"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#99a090"
                        />
                        <circle
                          cx="31"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#99a090"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#99a090"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#99a090"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#99a090"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#99a090"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#99a090"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#99a090"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#99a090"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#99a090"
                        />
                        <circle
                          cx="103"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#99a090"
                        />
                        <circle
                          cx="103"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#99a090"
                        />
                        <circle
                          cx="132"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#99a090"
                        />
                        <circle
                          cx="132"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#99a090"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="31"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="31"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="103"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="103"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="132"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#99a090"
                        />
                        <circle
                          cx="132"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#99a090"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#99a090"
                        />
                        <circle
                          cx="31"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="31"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#99a090"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#99a090"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#99a090"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#99a090"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#99a090"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#99a090"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#99a090"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#99a090"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#99a090"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#99a090"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#99a090"
                        />
                        <circle
                          cx="103"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#99a090"
                        />
                        <circle
                          cx="103"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#99a090"
                        />
                        <circle
                          cx="132"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#99a090"
                        />
                        <circle
                          cx="132"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#99a090"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
              <div className="mt-10 sm:mx-auto lg:mt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light mb-4">
                  What We Do
                </p>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-6">
                  Our Services
                </h2>
                <p className="text-white text-xl mb-4">
                  Colorado-based security guard and patrol services for
                  commercial clients, agencies and prime contractors.
                </p>
                <p className="text-light text-base mb-9">
                  Precise, reliable coverage for any environment &mdash; built on
                  close attention to detail, clear communication, and technical
                  proposals that set the standard.
                </p>

                {/* The four-stage process, stated once and compactly. This
                    replaced a line about on-call coverage and leadership
                    working the first shift, which the Reliability card in the
                    Company section already makes. */}
                <div className="mb-10 border-t border-white/10 pt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mid mb-4">
                    Every engagement runs the same four stages
                  </p>
                  {/* Numbered rather than an arrow chain: four pills plus
                      arrows do not fit this column at any sensible size, and
                      wrapping left an arrow orphaned at the start of a line.
                      01-04 still reads as a sequence and wraps cleanly. */}
                  <ol className="m-0 grid list-none grid-cols-1 gap-x-6 gap-y-3 p-0 sm:grid-cols-2">
                    {['Technical Audit', 'Compliance Mapping', 'Guard Training', 'Deployment'].map(
                      (stage, i) => (
                        <li key={stage} className="flex items-baseline gap-3">
                          <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-mid">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-[15px] font-medium text-white">{stage}</span>
                        </li>
                      ),
                    )}
                  </ol>
                  <p className="mt-4 mb-0 text-[15px] leading-relaxed text-light">
                    Documented and audit-ready from day one.
                  </p>
                </div>
                <button className="sm:mx-auto">
                  <Link href="/contact" to="contact" spy={true} smooth={true}>
                    <span
                      className="
                    mx-auto
                    py-4
                    px-10
                    lg:px-8
                    xl:px-10
                    inline-flex
                    items-center
                    justify-center
                    text-center text-black text-md md:text-xl
                    bg-litegreen
                    hover:bg-[#000000] hover:text-white transition ease-in-out duration-300
                    font-normal
                    rounded-lg
                    "
                    >
                      Get A Quote
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Service cards. The section sits on ink, so these use the same
              translucent-white treatment as the new site's dark cards rather
              than the light bordered cards used elsewhere on this page. */}
          <div className="mt-16 lg:mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((sv, i) => (
              <div
                key={sv.t}
                // Staggered by column position rather than by flat index, so
                // each ROW of the grid arrives together instead of the six
                // cards trickling in one at a time down the page.
                data-reveal="up"
                style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
                data-scroll-active
                className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-7 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09] motion-safe:transition-[transform,border-color,background-color,box-shadow] motion-safe:duration-300 motion-safe:ease-out hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.6)]"
              >
                {/* Icon well brightens with the card. On a touch device there
                    is no hover, so it mirrors off data-in-view instead and
                    lights up as the card reaches the centre of the screen —
                    the same fallback the new site uses. */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white motion-safe:transition-colors motion-safe:duration-300 group-hover:bg-white/20 max-[640px]:group-data-[in-view=true]:bg-white/20">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={SERVICE_ICON[sv.icon]} />
                  </svg>
                </div>
                <h3 className="m-0 text-lg font-semibold tracking-tight text-white">{sv.t}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-light">{sv.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
