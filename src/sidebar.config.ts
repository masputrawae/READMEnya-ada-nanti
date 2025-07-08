// sidebar.config.ts

// Definisikan tipe untuk item sidebar
interface SidebarItem {
  label: string;
  order: number;
}

// Deklarasikan array dengan tipe SidebarItem[]
export const SIDEBAR: SidebarItem[] = [
  { label: 'Main Page', order: 1 },
  { label: 'Other Page', order: 2 },
]