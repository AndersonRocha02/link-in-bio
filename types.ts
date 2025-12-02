import { ReactNode } from 'react';

export type LinkVariant = 'primary' | 'glass';

export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: ReactNode;
  variant: LinkVariant;
  badge?: string;
  actionIcon?: ReactNode;
  highlight?: boolean;
}

export interface ProfileData {
  name: string;
  role: string;
  imageUrl: string;
}