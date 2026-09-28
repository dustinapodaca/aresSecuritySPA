import React from 'react';

import gsaContractHolder from '../../assets/img/gsa-contract-holder.png';
import certGsa from '../../assets/img/cert-gsa-blue.png';
import certWosb from '../../assets/img/cert-wosb.png';
import certWbenc from '../../assets/img/cert-wbenc.png';
import certDenver from '../../assets/img/cert-denver.webp';

/**
 * Capability statement section — placeholder build.
 *
 * Every figure here is taken from the capability statement itself and matches
 * the new site and the SAM.gov registration. These are load-bearing
 * procurement identifiers, so do not paraphrase or "tidy" them.
 *
 * The PDF lives in public/files/ and is referenced through PUBLIC_URL so it
 * resolves correctly however CRA is served.
 */

const CODES = [
  { k: 'UEI', v: 'XQXDN6E33SF4', sub: 'Unique Entity ID (SAM.gov)' },
  { k: 'CAGE Code', v: '9KL18', sub: 'Commercial & Government Entity' },
  { k: 'Primary NAICS', v: '561612', sub: 'Security Guards & Patrol Services' },
  { k: 'PSC Code', v: 'S206', sub: 'Guard Services' },
  { k: 'SAM Status', v: 'Active', sub: 'Through March 26, 2027' },
  { k: 'Socioeconomic', v: 'Small Business · WOSB', sub: 'Woman-Owned Small Business' },
];

const CERTS = [
  { src: certGsa, alt: 'GSA Contract Holder', name: 'GSA Schedule Holder', id: '#47QSMS25D009Q' },
  { src: certWosb, alt: 'Woman-Owned Small Business', name: 'Woman-Owned Small Business', id: 'SBA · #WOSB250470' },
  { src: certWbenc, alt: "WBENC Women's Business Enterprise", name: "WBENC Women's Business Enterprise", id: '#WBE2303571' },
  { src: certDenver, alt: 'Denver Economic Development & Opportunity', name: 'M/WBE & SBE Certified', id: 'B2G VID 21353671', maxH: 'max-h-[46px]' },
];

const PDF_URL = `${process.env.PUBLIC_URL}/files/Ares-Security-Capability-Statement-2026.pdf`;

export default function Capability() {
  return (
    <section id="capability" className="bg-paper-2 border-t border-b border-line">
      <div className="container-ares py-20">
        {/* Heading */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mid mb-4">
            Federal Procurement
          </p>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-900 mb-4">
            Capability <span className="italic font-light text-mid">Statement</span>
          </h2>
          <p className="leading-relaxed lg:text-lg text-gray-600 max-w-3xl mx-auto md:mx-0">
            GSA Schedule holder, SAM-registered, and WOSB &amp; WBENC certified.
            Agencies and prime contractors can award through our existing
            vehicle without opening a new competition.
          </p>
        </div>

        {/* GSA contract-holder callout */}
        <div className="bg-odgreen rounded-2xl p-8 md:p-10 mb-10 flex flex-col md:flex-row md:items-center gap-8">
          <img
            src={gsaContractHolder}
            alt="GSA Contract Holder"
            className="h-auto w-full max-w-[200px] mx-auto md:mx-0 flex-shrink-0"
          />
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 mb-2">
              Primary Vehicle
            </p>
            <p className="text-white text-xl md:text-2xl font-medium tracking-tight mb-2">
              GSA Multiple Award Schedule
            </p>
            <p className="text-gray-100 text-base leading-relaxed">
              Contract <span className="font-semibold">#47QSMS25D009Q</span> · SIN 561612
              <span className="block mt-1 text-gray-400">
                Pre-negotiated federal pricing — award task orders without a new competition.
              </span>
            </p>
          </div>
        </div>

        {/* Codes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden mb-12">
          {CODES.map((c) => (
            <div key={c.k} className="bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mid mb-2">
                {c.k}
              </p>
              <p className="text-lg font-semibold text-gray-900 tracking-tight tabular-nums">
                {c.v}
              </p>
              <p className="text-sm text-gray-500 mt-1 leading-snug">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {CERTS.map((c) => (
            <div
              key={c.name}
              className="bg-white border border-line rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 min-h-[170px]"
            >
              {/* Fixed-height logo well. The badges differ in aspect (the Denver
                  mark is ~4:1, the others closer to square), so without a shared
                  well the shorter ones shift their card's centred content and the
                  captions stop lining up across the row. */}
              <div className="h-16 flex items-center justify-center">
                <img src={c.src} alt={c.alt} className={`${c.maxH || 'max-h-[64px]'} max-w-full w-auto object-contain`} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900 leading-snug">{c.name}</p>
                <p className="text-xs text-mid mt-1 tabular-nums">{c.id}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Download */}
        <div className="text-center md:text-left">
          <a
            href={PDF_URL}
            download
            className="inline-flex items-center gap-3 bg-odgreen text-white rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-gray-700"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Capability Statement (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
