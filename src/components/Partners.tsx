import Marquee from "react-fast-marquee";

const Partners = () => {
    const partners = [
        { name: "Cambridge Assessment", logo: "🎓" },
        { name: "British Council", logo: "🇬🇧" },
        { name: "TOEFL", logo: "📚" },
        { name: "Goethe Institut", logo: "🇩🇪" },
        { name: "DELF/DALF", logo: "🇫🇷" },
        { name: "HSK", logo: "🇨🇳" },
        { name: "JLPT", logo: "🇯🇵" },
        { name: "DELE", logo: "🇪🇸" }
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        Bizning <span className="text-blue-600">Hamkorlarimiz</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Xalqaro tan olingan tashkilotlar bilan hamkorlikda
                    </p>
                </div>

                {/* Marquee with react-fast-marquee */}
                <Marquee
                    gradient={true}
                    gradientColor="rgb(249, 250, 251)"
                    gradientWidth={100}
                    speed={40}
                    pauseOnHover={true}
                >
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="mx-6 w-48 bg-white rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-500 group"
                        >
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                                {partner.logo}
                            </div>
                            <p className="text-center font-semibold text-sm text-gray-900">
                                {partner.name}
                            </p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Partners;