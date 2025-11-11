"use client"
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    { question: "Platformadan qanday foydalanish mumkin?", answer: "Ro'yxatdan o'tganingizdan so'ng..." },
    { question: "Qancha vaqt ichida natija olish mumkin?", answer: "Barcha o'qituvchilarimiz sertifikatlangan va kamida 5 yillik tajribaga ega. Ular xalqaro imtihonlar bo'yicha mutaxassislar va o'z sohalarida yuqori natijalarga ega." },
    { question: "O'qituvchilar qanchalik tajribali?", answer: "Barcha o'qituvchilarimiz sertifikatlangan..." }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<HTMLDivElement[]>([]);

    const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Tez-tez So'raladigan Savollar</h2>
                    <p className="text-xl text-gray-600">Sizni qiziqtirishi mumkin bo'lgan savollar va javoblar</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;

                        return (
                            <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                                <button
                                    className="flex justify-between w-full px-6 py-4 text-left text-gray-800 font-semibold hover:bg-gray-100 transition-colors"
                                    onClick={() => toggle(idx)}
                                >
                                    {faq.question}
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                <div
                                    ref={el => { contentRefs.current[idx] = el!; }} // ✅ TypeScript friendly
                                    style={{
                                        maxHeight: isOpen ? `${contentRefs.current[idx]?.scrollHeight}px` : "0px",
                                        transition: "max-height 0.3s ease",
                                    }}
                                    className="px-6 overflow-hidden text-gray-600 border-t border-gray-200"
                                >
                                    <div className="py-4">{faq.answer}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
