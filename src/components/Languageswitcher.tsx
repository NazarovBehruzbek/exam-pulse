'use client';

import { Globe, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";

const languages = [
    { code: 'uz', name: "O'zbekcha", flag: '🇺🇿' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(languages[0]);
    const router = useRouter();
    const pathname = usePathname();

    // Avtomatik ravishda hozirgi URL locale ni aniqlash
    useEffect(() => {
        const pathLocale = pathname.split('/')[1]; // masalan '/ru/home' => 'ru'
        const found = languages.find(l => l.code === pathLocale);
        if (found) setCurrentLang(found);
    }, [pathname]);

    // Tilni o‘zgartirish funksiyasi
    const handleLangChange = (lang: typeof currentLang) => {
        setCurrentLang(lang);
        setIsOpen(false);
        router.replace({ pathname }, { locale: lang.code }); // URL da locale o‘zgaradi
    };

    // --- UI ---
    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors w-full ${mobile ? 'justify-center border border-gray-300' : ''}`}
            >
                <Globe className="h-4 w-4" />
                <span>{currentLang.flag}</span>
                <span className={`${mobile ? '' : 'hidden lg:inline'}`}>{currentLang.name}</span>
                <ChevronDown className="h-4 w-4" />
            </button>

            {isOpen && (
                <>
                    {/* Background overlay */}
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                    {/* Dropdown */}
                    <div className={`absolute ${mobile ? 'left-0 right-0' : 'right-0'} mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20`}>
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLangChange(lang)}
                                className="w-full flex items-center px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                                <span className="mr-2">{lang.flag}</span>
                                {lang.name}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
