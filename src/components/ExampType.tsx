import { GraduationCap, Globe, BookOpen, Award } from "lucide-react";

const exams = [
  {
    icon: Globe,
    title: "IELTS",
    description: "International English Language Testing System - xalqaro ingliz tili imtihoni",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: BookOpen,
    title: "Turk Tili",
    description: "Turk tili malaka sertifikati (TÖMER, YÖS) ga tayyorgarlik",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: GraduationCap,
    title: "Rus Tili",
    description: "Rus tili bilim darajasi sertifikati (TORFL/TRKI) ga tayyorgarlik",
    color: "text-pink-600",
    bgColor: "bg-pink-100"
  },
  {
    icon: Award,
    title: "CEFR",
    description: "Common European Framework - yevropa tillari uchun umumiy standart",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  }
];

const ExamTypes = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Qaysi <span className="text-blue-600">Imtihonga</span> Tayyorlanmoqchisiz?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Barcha asosiy xalqaro sertifikatlar uchun to'liq tayyorgarlik kurslari
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exams.map((exam, index) => {
            const Icon = exam.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-xl cursor-pointer group p-6 space-y-4"
              >
                <div className={`w-16 h-16 rounded-xl ${exam.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-8 w-8 ${exam.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{exam.title}</h3>
                <p className="text-gray-600">{exam.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExamTypes;