import type { Metadata } from 'next';
import Demo from '@/components/ui/scroll-expansion-demo';

export const metadata: Metadata = {
  title: 'Scroll Expansion Demo | Aklan International',
  description: 'Standalone demo for the ScrollExpandMedia component.',
};

export default function ScrollExpansionDemoPage() {
  return <Demo />;
}
