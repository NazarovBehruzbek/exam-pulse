// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
    // foydalanuvchi / ga kirganda /en ga yo‘naltirish
    redirect('/en');
}
