import type { Metadata } from 'next';
import { CircuitBoard, Factory, Wrench } from 'lucide-react';
import { SubPageShell } from '@/components/ui/sub-page-shell';

export const metadata: Metadata = {
  title: 'Multitech Technologies | Engineering Technology Division',
  description:
    'Multitech Technologies is the technology and engineering-related division under Aklan International (Pvt) Ltd.',
};

const items = [
  ['Technology solutions', 'Engineering-related technology support for modern industrial requirements.'],
  ['Technical services', 'Practical support for electrical, automation, and industrial solution workflows.'],
  ['Industrial innovation', 'A division positioned for technology-led engineering and supply coordination.'],
];

export default function MultitechTechnologiesPage() {
  return (
    <SubPageShell
      eyebrow="Multitech Technologies"
      title="Technology and engineering-related division."
      description="Multitech Technologies operates under Aklan International (Pvt) Ltd, supporting modern engineering, technology, and industrial solution requirements."
    >
      <section className="px-5 py-8 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[CircuitBoard, Wrench, Factory].map((Icon, index) => (
            <article
              key={items[index][0]}
              className="rounded-2xl border border-cyan-200/15 bg-[#0b213f] p-7"
            >
              <Icon className="h-9 w-9 text-cyan-300" />
              <h2 className="mt-8 text-2xl font-black">{items[index][0]}</h2>
              <p className="mt-4 leading-7 text-slate-300">{items[index][1]}</p>
            </article>
          ))}
        </div>
      </section>
    </SubPageShell>
  );
}
