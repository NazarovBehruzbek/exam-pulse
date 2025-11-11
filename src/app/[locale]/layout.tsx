// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import en from '@/messages/en.json';
import uz from '@/messages/uz.json';
import ru from '@/messages/ru.json';
import "../globals.css";

const messagesMap = { en, uz, ru };

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: 'en' | 'uz' | 'ru' }>; 
};

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
