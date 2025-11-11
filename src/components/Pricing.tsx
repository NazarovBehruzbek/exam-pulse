import { Check } from "lucide-react";

const plans = [
    {
        name: "Basic",
        price: "49,000",
        period: "/oy",
        description: "Boshlang'ich o'quvchilar uchun",
        features: [
            "50 ta test imkoniyati",
            "Asosiy statistika",
            "AI baholash",
            "Mobil ilova kirish",
            "Email qo'llab-quvvatlash",
        ],
        popular: false,
    },
    {
        name: "Premium",
        price: "99,000",
        period: "/oy",
        description: "Jiddiy tayyorlanuvchilar uchun",
        features: [
            "Cheksiz test imkoniyati",
            "Batafsil tahlil va statistika",
            "AI + Mutaxassis baholash",
            "Shaxsiy o'qituvchi maslahati",
            "Imtihon simulyatsiyasi",
            "Prioritet qo'llab-quvvatlash",
            "Guruh darslariga kirish",
        ],
        popular: true,
    },
    {
        name: "Pro",
        price: "199,000",
        period: "/oy",
        description: "Professional va o'qituvchilar uchun",
        features: [
            "Barcha Premium imkoniyatlar",
            "Individual o'quv rejasi",
            "Haftalik 1-1 mashg'ulotlar",
            "Kurs yaratish imkoniyati",
            "O'quvchilar boshqaruvi",
            "Maxsus tahlil va hisobotlar",
            "Sertifikat olish",
            "VIP qo'llab-quvvatlash",
        ],
        popular: false,
    },
];

const Pricing = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">O'zingizga Mos Rejani Tanlang</h2>
                    <p className="text-xl text-gray-600">Har bir darajadagi o'quvchilar uchun qulay narxlar</p>
                </div>

                {/* Plans Grid */}
                <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-xl border p-6 flex flex-col justify-between shadow-sm transition-transform duration-300 ${plan.popular
                                    ? "border-2 border-blue-500 bg-blue-50 scale-105 shadow-lg"
                                    : "border-gray-200 bg-white"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    Eng Mashhur
                                </span>
                            )}

                            {/* Card Header */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold">{plan.name}</h3>
                                <p className="text-gray-600 mt-2">{plan.description}</p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-6">
                                <span className="text-3xl font-extrabold">{plan.price}</span>
                                <span className="text-gray-600 ml-1">{plan.period}</span>
                            </div>

                            {/* Features */}
                            <ul className="mb-6 space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button
                                className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular
                                        ? "bg-blue-500 text-white hover:bg-blue-600"
                                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                    }`}
                            >
                                Tanlash
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <p className="text-center text-gray-500 mt-12">
                    Barcha rejalar 14 kunlik bepul sinov davri bilan keladi
                </p>
            </div>
        </section>
    );
};

export default Pricing;
