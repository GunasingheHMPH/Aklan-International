'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShoppingCart,
} from 'lucide-react';
import {
  company,
  divisions,
  featuredProducts,
  services,
} from '@/components/ui/site-data';
import { SiteNav } from '@/components/ui/site-nav';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const MotionSection = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-90px' }}
    variants={fadeUp}
    transition={{ duration: 0.65, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const heroSlides = [
  '/aklan-slide-solar-install.jpg',
  '/aklan-slide-panel-workshop.jpg',
  '/aklan-slide-power-panel.jpg',
  '/aklan-slide-solar-rooftop.jpg',
  '/aklan-slide-solar-array.jpg',
  '/aklan-slide-solar-sun.jpg',
  '/aklan-primary-hero.png?v=2',
];

export default function AklanHomePage() {
  return (
    <main className="min-h-screen bg-[#071426] text-white">
      <SiteNav />

      <section className="relative overflow-hidden">
        <ScrollExpandMedia
          mediaType="image"
          mediaSrc="/aklan-primary-hero.png?v=2"
          bgImageSrc={heroSlides}
          title="Aklan International"
          date="Electrical Engineering Solutions"
          scrollToExpand="Scroll to explore"
          textBlend
        >
          <div className="bg-[#071426] text-white">
            <IntroSections />
          </div>
        </ScrollExpandMedia>

        <div className="pointer-events-none absolute inset-x-0 top-[calc(100dvh-13.5rem)] z-30 px-5 md:top-[calc(100dvh-11rem)]">
          <div className="pointer-events-auto mx-auto grid max-w-5xl gap-3 sm:grid-cols-3">
            <Link
              href="/aklan-solar"
              className="rounded-2xl border border-white/20 bg-[#06162f]/80 p-4 text-white shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:border-amber-300"
            >
              <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                Division
              </span>
              <span className="mt-2 block text-xl font-black">
                Aklan Solar
              </span>
            </Link>
            <Link
              href="/multitech-technologies"
              className="rounded-2xl border border-white/20 bg-[#06162f]/80 p-4 text-white shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300"
            >
              <span className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                Division
              </span>
              <span className="mt-2 block text-xl font-black">
                Multitech Technologies
              </span>
            </Link>
            <Link
              href="/marketplace"
              className="rounded-2xl border border-cyan-300/50 bg-cyan-300 p-4 text-slate-950 shadow-2xl shadow-cyan-950/30 transition hover:-translate-y-1 hover:bg-amber-300"
            >
              <span className="text-xs font-black uppercase tracking-[0.22em]">
                Marketplace
              </span>
              <span className="mt-2 flex items-center gap-2 text-xl font-black">
                Order Now
                <ShoppingCart className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function IntroSections() {
  return (
    <>

      <section id="about" className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionSection>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Who we are
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              A reliable partner for electrical engineering and industrial
              supply.
            </h2>
          </MotionSection>
          <MotionSection>
            <div className="grid gap-6 text-lg leading-8 text-slate-300">
              <p>
                Aklan International (Pvt) Ltd provides total electrical
                engineering solutions, world-renowned engineering products, and
                technical services for a broad customer base.
              </p>
              <p>
                The company supports electrical equipment supply, online
                ordering, panel-board related projects, after-sales service, and
                industrial product requirements with a professional engineering
                focus.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {['1,500+ customers', '24/7 hotline', 'Online shop'].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-cyan-200/15 bg-cyan-300/10 p-5 font-bold text-cyan-100"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      <section id="services" className="bg-slate-950 px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <MotionSection>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Services
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
              Electrical solutions for projects, panels, plants, and supply
              chains.
            </h2>
          </MotionSection>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
              >
                <Icon className="h-8 w-8 text-amber-300" />
                <h3 className="mt-8 text-xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="marketplace" className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionSection>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Marketplace
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Browse and order electrical equipment online.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Shop low voltage products, contactors, breakers, protection
              devices, industrial sockets, panel meters, copper items, and
              related electrical components.
            </p>
            <Link
              href="/marketplace"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-cyan-300 px-6 text-sm font-black text-slate-950 transition hover:bg-amber-300"
            >
              Go to Marketplace
              <ArrowRight className="h-4 w-4" />
            </Link>
          </MotionSection>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredProducts.map(({ icon: Icon, name, category, note }) => (
              <MotionSection key={name}>
                <div className="rounded-2xl border border-cyan-200/15 bg-[#0b213f] p-6">
                  <Icon className="h-7 w-7 text-cyan-300" />
                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                    {category}
                  </p>
                  <h3 className="mt-2 text-2xl font-black">{name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{note}</p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl rounded-3xl border border-cyan-200/15 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/20">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white">
            All Categories
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Legrand Switches',
              'Industrial Sockets',
              'Lightning Conductors',
              'Copper',
              'Capacitors',
              'Low Voltage',
              'Hensel Enclosures',
              'Special',
            ].map((category) => (
              <Link
                key={category}
                href="/marketplace"
                className="rounded-xl border border-cyan-200/15 bg-[#0b213f] px-4 py-3 text-sm font-black text-cyan-50 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-slate-950 md:px-10">
        <div className="mx-auto max-w-7xl">
          <MotionSection>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Divisions
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
              Sub-companies under Aklan International (Pvt) Ltd.
            </h2>
          </MotionSection>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {divisions.map(({ icon: Icon, title, text, href }) => (
              <Link
                key={title}
                href={href}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-950/10"
              >
                <Icon className="h-9 w-9 text-blue-700" />
                <h3 className="mt-8 text-3xl font-black">{title}</h3>
                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  {text}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-black text-blue-700">
                  View division
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-cyan-200/15 bg-gradient-to-br from-[#0b2f60] to-[#06162f] p-8 shadow-2xl shadow-cyan-950/30 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              Contact / Quick Order
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Need electrical products or engineering support?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Contact Aklan International for product availability, quotation
              requests, online ordering support, and technical assistance.
            </p>
          </div>
          <div className="space-y-4 text-slate-200">
            <p className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 text-cyan-300" />
              {company.phone}
            </p>
            <p className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 text-cyan-300" />
              {company.email}
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 text-cyan-300" />
              {company.address}
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex h-12 items-center rounded-full bg-cyan-300 px-6 text-sm font-black text-slate-950 hover:bg-amber-300"
              >
                Request Quote
              </a>
              <Link
                href="/marketplace"
                className="inline-flex h-12 items-center rounded-full border border-white/25 px-6 text-sm font-bold text-white hover:bg-white/10"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
