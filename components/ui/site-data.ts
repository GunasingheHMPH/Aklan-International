import {
  BatteryCharging,
  CircuitBoard,
  Factory,
  Gauge,
  ShieldCheck,
  ShoppingCart,
  SunMedium,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export const company = {
  name: 'Aklan International (Pvt) Ltd',
  email: 'sales@aklan.lk',
  phone: '+94 112 199 199',
  address: 'No. 16, Pagoda Road, Nugegoda, Sri Lanka',
};

export const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Aklan Solar', href: '/aklan-solar' },
  { label: 'Multitech', href: '/multitech-technologies' },
  { label: 'Contact', href: '/#contact' },
];

export const services: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
  {
    icon: Zap,
    title: 'Electrical Engineering Solutions',
    text: 'Total electrical engineering support, project coordination, and technical delivery for industrial and commercial customers.',
  },
  {
    icon: CircuitBoard,
    title: 'Electrical Equipment Supply',
    text: 'Supply of low voltage switchgear, protection devices, panel accessories, copper items, sockets, meters, and related components.',
  },
  {
    icon: Factory,
    title: 'Industrial Electrical Products',
    text: 'Products and systems for panel builders, contractors, factories, construction projects, and infrastructure applications.',
  },
  {
    icon: Wrench,
    title: 'Engineering & Technical Services',
    text: 'After-sales support, technical guidance, panel-board related services, and dependable service access for customers island-wide.',
  },
];

export const products = [
  'Legrand Switches',
  'Industrial Sockets',
  'Lightning Conductors',
  'Copper',
  'Capacitors',
  'Low Voltage',
  'Hensel Enclosures',
  'Special',
  'MCB',
  'RCCB',
  'Fixed MCCB',
  'Adjustable MCCB',
  'ACB',
  'Contactors',
  'Mini Contactors',
  'Surge Protection Devices',
  'Manual Motor Starters',
  'VFD',
  'Capacitors',
  'Panel Meters',
];

export const featuredProducts: Array<{
  icon: LucideIcon;
  name: string;
  category: string;
  note: string;
}> = [
  {
    icon: ShieldCheck,
    name: 'MCB / RCCB',
    category: 'Low Voltage Protection',
    note: 'Browse circuit protection for residential, commercial, and industrial panels.',
  },
  {
    icon: Gauge,
    name: 'MCCB / ACB',
    category: 'Switchgear',
    note: 'Order molded-case and air circuit breaker solutions for heavier applications.',
  },
  {
    icon: BatteryCharging,
    name: 'Contactors',
    category: 'Control Components',
    note: 'Select contactors, mini contactors, DOL items, and capacitor switching solutions.',
  },
  {
    icon: ShoppingCart,
    name: 'Electrical Accessories',
    category: 'Online Ordering',
    note: 'Request quotations or place quick orders for related electrical components.',
  },
];

export const divisions = [
  {
    title: 'Aklan Solar',
    href: '/aklan-solar',
    icon: SunMedium,
    text: 'Renewable energy and solar solutions division for sustainable power systems, solar accessories, and project support.',
  },
  {
    title: 'Multitech Technologies',
    href: '/multitech-technologies',
    icon: CircuitBoard,
    text: 'Technology and engineering-related division supporting modern technical solutions and industrial innovation.',
  },
];
