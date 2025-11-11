// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import en from '@/messages/en.json';
import uz from '@/messages/uz.json';
import ru from '@/messages/ru.json';
import "../globals.css";

const messagesMap = { en, uz, ru };
type Locale = 'en' | 'uz' | 'ru';
interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = messagesMap[locale] || en;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
