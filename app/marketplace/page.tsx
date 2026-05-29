import type { Metadata } from 'next';
import { ShoppingCart } from 'lucide-react';
import { featuredProducts } from '@/components/ui/site-data';
import { SubPageShell } from '@/components/ui/sub-page-shell';

const marketplaceCategories = [
  'Legrand Switches',
  'Industrial Sockets',
  'Lightning Conductors',
  'Copper',
  'Capacitors',
  'Low Voltage',
  'Hensel Enclosures',
  'Special',
];

export const metadata: Metadata = {
  title: 'Electrical Marketplace | Aklan International (Pvt) Ltd',
  description:
    'Browse and order MCB, RCCB, MCCB, ACB, contactors, and industrial electrical components from Aklan International.',
};

export default function MarketplacePage() {
  return (
    <SubPageShell
      eyebrow="Marketplace"
      title="Order electrical equipment online."
      description="Browse low-voltage protection, switchgear, control components, capacitors, panel meters, copper products, industrial sockets, and related electrical items."
    >
      <section className="px-5 py-8 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map(({ icon: Icon, name, category, note }) => (
            <article
              key={name}
              className="rounded-2xl border border-cyan-200/15 bg-[#0b213f] p-6"
            >
              <Icon className="h-8 w-8 text-cyan-300" />
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                {category}
              </p>
              <h2 className="mt-2 text-2xl font-black">{name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{note}</p>
              <button className="mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-cyan-300 px-4 text-sm font-black text-slate-950">
                <ShoppingCart className="h-4 w-4" />
                Request order
              </button>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-black uppercase tracking-tight">
            All Categories
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {marketplaceCategories.map((category) => (
              <button
                key={category}
                className="rounded-xl border border-cyan-200/15 bg-[#0b213f] px-4 py-3 text-left text-sm font-black text-cyan-50 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950"
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
