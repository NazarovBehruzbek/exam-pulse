import { Users, BookCheck, BarChart3, Clock, Trophy, Sparkles } from "lucide-react";

const studentFeatures = [
  {
    icon: BookCheck,
    title: "Testlar Kutubxonasi",
    description: "Minglab real imtihon savollariga kirish"
  },
  {
    icon: BarChart3,
    title: "Natijalarni Kuzatish",
    description: "O'zingizning taraqqiyotingizni real vaqtda ko'ring"
  },
  {
    icon: Clock,
    title: "O'z Vaqtingizda",
    description: "Istalgan vaqt va joyda o'rganing"
  }
];

const teacherFeatures = [
  {
    icon: Users,
    title: "O'quvchilarni Boshqarish",
    description: "Barcha o'quvchilaringiz uchun alohida kabinet"
  },
  {
    icon: Sparkles,
    title: "Test Yaratish",
    description: "O'z testlaringizni osongina yarating va yuklang"
  },
  {
    icon: Trophy,
    title: "Natijalarni Tahlil",
    description: "Har bir o'quvchining natijalarini batafsil ko'ring"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Students Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                <span className="text-blue-600 font-semibold">O'quvchilar Uchun</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Professional Tayyorgarlik <span className="text-blue-600">Vositalari</span>
              </h2>
              <p className="text-lg text-gray-600">
                Zamonaviy metodlar va texnologiyalar yordamida imtihonga tayyorgarlik ko'ring
              </p>
            </div>
            
            <div className="space-y-4">
              {studentFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-600 transition-all hover:shadow-xl p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Teachers Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-purple-100 rounded-full">
                <span className="text-purple-600 font-semibold">O'qituvchilar Uchun</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                O'qitish Jarayonini <span className="text-purple-600">Soddalashtiramiz</span>
              </h2>
              <p className="text-lg text-gray-600">
                O'quvchilaringizni samarali boshqaring va natijalarni kuzatib boring
              </p>
            </div>
            
            <div className="space-y-4">
              {teacherFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-xl border-2 border-gray-200 hover:border-purple-600 transition-all hover:shadow-xl p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;