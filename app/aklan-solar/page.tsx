import type { Metadata } from 'next';
import { SunMedium, Zap, BatteryCharging } from 'lucide-react';
import { SubPageShell } from '@/components/ui/sub-page-shell';

export const metadata: Metadata = {
  title: 'Aklan Solar | Renewable Energy Division',
  description:
    'Aklan Solar is the renewable energy and solar solutions division under Aklan International (Pvt) Ltd.',
};

const items = [
  ['Solar solutions', 'Renewable energy systems and solar project support.'],
  ['Solar electrical products', 'Electrical products and accessories for solar applications.'],
  ['Technical coordination', 'Support for planning, supply, installation, and maintenance workflows.'],
];

export default function AklanSolarPage() {
  return (
    <SubPageShell
      eyebrow="Aklan Solar"
      title="Renewable energy and solar solutions division."
      description="Aklan Solar operates under Aklan International (Pvt) Ltd, focused on sustainable electrical solutions, solar product support, and renewable-energy project needs."
    >
      <section className="px-5 py-8 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[SunMedium, BatteryCharging, Zap].map((Icon, index) => (
            <article
              key={items[index][0]}
              className="rounded-2xl border border-cyan-200/15 bg-[#0b213f] p-7"
            >
              <Icon className="h-9 w-9 text-amber-300" />
              <h2 className="mt-8 text-2xl font-black">{items[index][0]}</h2>
              <p className="mt-4 leading-7 text-slate-300">{items[index][1]}</p>
            </article>
          ))}
        </div>
      </section>
    </SubPageShell>
  );
}
