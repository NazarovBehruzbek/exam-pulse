'use client';

import { GraduationCap, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "use-intl";
import LanguageSwitcher from "./Languageswitcher";
import { useParams } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations();
  const { locale } = useParams()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuData = [
    { title: t("Home"), href: "#" },
    { title: ("Exams"), href: "#" },
    { title: ("Students"), href: "#" },
    { title: ("Teachers"), href: "#" },
    { title: ("Pricing"), href: "#" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'backdrop-blur bg-white/70 shadow-md' : 'bg-white/95'}`}>
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ExamPrep</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuData.map((item) => (
              <Link key={item.title} href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {item.title}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher /> {/* 🟢 yangi komponent */}
            <Link href={`/${locale}/login`} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
              {("Login")}
            </Link>
            <Link href={`/${locale}/sign-up`} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              {("Register")}
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            {menuData.map((item) => (
              <Link key={item.title} href={item.href} className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {item.title}
              </Link>
            ))}

            <div className="pt-4 space-y-3 border-t">
              <LanguageSwitcher mobile /> {/* 🟢 mobil versiya */}
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                {"Login"}
              </button>
              <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                {"Register"}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
