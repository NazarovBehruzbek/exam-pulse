import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section className="relative py-20 bg-linear-to-r from-blue-500 to-green-500 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">
                        Bugun Imtihonga Tayyorgarlikni Boshlang
                    </h2>

                    <p className="text-xl text-white/90">
                        Minglab talabalar bizning platformamiz orqali muvaffaqiyatga erishdi. Navbat sizda!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3  bg-white text-green-600 font-semibold text-lg rounded-lg shadow-lg shadow-white/30 inline-flex items-center justify-center group transition-all hover:bg-white/90">
                            O'quvchi Sifatida Boshlash
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                        </button>

                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3  bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-lg border border-white/30 hover:bg-white/30 transition-colors">
                            O'qituvchi Kabineti
                        </button>
                    </div>

                    <p className="text-white/75 text-sm mt-4">
                        ✨ Kredit karta talab etilmaydi • 14 kunlik bepul sinov davri
                    </p>
                </div>
            </div>
        </section>

    );
};

export default CTA;
