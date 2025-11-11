import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/hero-education.jpg";

export default function Hero() {
    return (
        <section className="relative  flex items-center bg-linear-to-br from-blue-50 via-green-50 to-blue-50 overflow-hidden md:py-10">
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-purple-600/5"></div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in">
                        <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                            <span className="text-blue-600 font-semibold">🎓 Online Imtihon Platformasi</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
                            Imtihonga
                            <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Tayyorgarlik Ko'ring
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-xl">
                            IELTS, Turk tili, Rus tili va CEFR imtihonlariga professional tayyorgarlik platformasi.
                            O'z vaqtingizda o'rganing, natijalaringizni kuzatib boring.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-2  bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-medium rounded-lg shadow-lg shadow-blue-600/30 transition-all group inline-flex items-center justify-center">
                                Boshlab Ko'ring
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="w-full sm:w-auto px-6 sm:px-8 py-2 bg-white hover:bg-gray-50 text-gray-900 text-base sm:text-lg font-medium rounded-lg border-2 border-gray-300 transition-colors">
                                Ko'proq Ma'lumot
                            </button>
                        </div>

                        <div className="flex gap-8 pt-4">
                            <div>
                                <div className="text-3xl font-bold text-blue-600">10K+</div>
                                <div className="text-gray-600">O'quvchilar</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600">500+</div>
                                <div className="text-gray-600">O'qituvchilar</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-purple-600">95%</div>
                                <div className="text-gray-600">Muvaffaqiyat</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:block hidden">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-600/20">
                            <Image
                                src={heroImage}
                                alt="Online Imtihon Platformasi"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-purple-600/10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

