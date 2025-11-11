import { Bot, Users, Zap, Clock, CheckCircle, BarChart3, UserCheck, Lightbulb, Heart, Target } from "lucide-react";

const DualApproaches = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Ikki Xil <span className="text-blue-600">Tayyorgarlik</span> Usuli
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sun'iy intellekt yordamida mustaqil o'rganish yoki professional o'qituvchilar bilan shaxsiy mashg'ulotlar - siz tanglaysiz
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid lg:grid-cols-2 gap-8 container mx-auto">
          {/* AI-Based Learning */}
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
              <Bot className="w-10 h-10 text-blue-600" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              AI Asosida O'rganish
            </h3>
            <p className="text-gray-600 mb-8">
              Zamonaviy sun'iy intellekt texnologiyalari yordamida o'z vaqtingizda va o'z sur'atingizda imtihonga tayyorlaning
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Tezkor Natijalar</h4>
                  <p className="text-gray-600 text-sm">Testlarni yechib, bir zumda batafsil tahlil va maslahatlar oling</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">24/7 Mavjudlik</h4>
                  <p className="text-gray-600 text-sm">Istalgan vaqtda, istalgan joyda AI yordamchingiz bilan mashq qiling</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Shaxsiy Rejalar</h4>
                  <p className="text-gray-600 text-sm">Sizning darajangizga moslashtirilgan maxsus o'quv dasturi</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Taraqqiyotni Kuzatish</h4>
                  <p className="text-gray-600 text-sm">Natijalaringizni grafik va statistika orqali real vaqtda ko'ring</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Teachers */}
          <div className="bg-linear-to-br from-green-40 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6">
              <Users className="w-10 h-10 text-green-600" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Professional O'qituvchilar
            </h3>
            <p className="text-gray-600 mb-8">
              Tajribali va sertifikatlangan mutaxassislar bilan shaxsiy darslar orqali yuqori natijalarga erishing
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Sertifikatlangan Ustozlar</h4>
                  <p className="text-gray-600 text-sm">Xalqaro sertifikatga ega professional o'qituvchilar jamoasi</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Individual Yondashuv</h4>
                  <p className="text-gray-600 text-sm">Har bir talabaning ehtiyojiga moslashtirilgan maxsus strategiya</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Motivatsiya va Qo'llab-quvvatlash</h4>
                  <p className="text-gray-600 text-sm">Doimiy rag'batlantirish va emotsional yordam bilan maqsadga yeting</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Real Tajriba</h4>
                  <p className="text-gray-600 text-sm">Haqiqiy imtihon sharoitida o'tgan mutaxassislarning amaliy maslahatlari</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Ikkala usulni birlashtirib, eng yaxshi natijaga erishishingiz mumkin!
          </p>
          <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105">
            Bepul Sinab Ko'ring
          </button>
        </div>
      </div>
    </section>
  );
};

export default DualApproaches;