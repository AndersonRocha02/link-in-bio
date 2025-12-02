import React from 'react';
import { ArrowUpRight, ChevronRight, BookOpen, ShoppingBag } from 'lucide-react';
import { LinkItem, ProfileData } from './types';
import { WhatsAppIcon, BehanceIcon } from './components/Icons';

export const PROFILE_DATA: ProfileData = {
  name: "Anderson Rocha",
  role: "Especialista em posicionamento de marcas.\nTe ajudo a transmitir credibilidade com um marketing estratégico.",
  imageUrl: "https://i.ibb.co/TDVDB5rb/Gemini-Generated-Image-l6e28vl6e28vl6e2.png"
};

export const LINKS_DATA: LinkItem[] = [
  {
    id: 'whatsapp',
    title: 'Solicitar Orçamento',
    subtitle: 'Inicie uma conversa no WhatsApp',
    href: 'https://wa.me/5522998011435',
    variant: 'primary',
    icon: <WhatsAppIcon className="w-5 h-5" />,
    actionIcon: <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
  },
  {
    id: 'behance',
    title: 'Portfólio Behance',
    subtitle: 'Veja meus projetos recentes',
    href: 'https://www.behance.net/anderson_rochaa',
    variant: 'glass',
    icon: <BehanceIcon className="w-7 h-7" />,
    actionIcon: <ChevronRight className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
  },
  {
    id: 'ebook',
    title: 'Ebook: Posicionamento',
    subtitle: 'Guia de posicionamento para marcas e roteiros de vídeos (reels)',
    href: '#',
    variant: 'glass',
    badge: 'Em Breve',
    highlight: true,
    icon: <BookOpen className="w-5 h-5" />,
    actionIcon: <ShoppingBag className="w-5 h-5 text-neutral-600 group-hover:text-orange-400 transition-colors mb-1" />
  }
];