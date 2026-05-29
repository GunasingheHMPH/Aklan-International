import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { SiteNav } from '@/components/ui/site-nav';
import { company } from '@/components/ui/site-data';

interface SubPageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function SubPageShell({
  eyebrow,
  title,
  description,
  children,
}: SubPageShellProps) {
  return (
    <main className="min-h-screen bg-[#071426] text-white">
      <SiteNav />
      <section className="px-5 pb-14 pt-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-200 hover:text-amber-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <p className="mt-12 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        </div>
      </section>
      {children}
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl border border-cyan-200/15 bg-[#0b213f] p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black">Talk to Aklan International</h2>
            <p className="mt-2 text-slate-300">
              {company.phone} | {company.email}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${company.phone.replaceAll(' ', '')}`}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-sm font-bold text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-cyan-300 px-5 text-sm font-black text-slate-950 hover:bg-amber-300"
            >
              <Mail className="h-4 w-4" />
              Send inquiry
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
