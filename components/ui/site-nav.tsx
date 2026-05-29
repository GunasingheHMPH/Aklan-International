import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { company, navLinks } from '@/components/ui/site-data';

export function SiteNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-cyan-200/25 bg-[#06162f]/85 px-4 py-3 text-white shadow-2xl shadow-cyan-950/30 backdrop-blur md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
            <Image
              src="/aklan-primary-hero.png?v=2"
              alt="Aklan International logo"
              width={80}
              height={80}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="truncate text-sm font-bold md:text-base">
            Aklan International
          </span>
        </Link>

        <div className="hidden items-center gap-5 text-sm font-medium text-slate-200 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-cyan-200">
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={`mailto:${company.email}`}
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-4 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
        >
          Order Online
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
}
