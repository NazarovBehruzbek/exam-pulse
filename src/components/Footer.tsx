import { GraduationCap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ExamPrep</span>
            </div>
            <p className="text-gray-500">
              Professional online imtihon tayyorgarlik platformasi
            </p>
          </div>

          {/* Imtihonlar */}
          <div>
            <h3 className="font-bold mb-4">Imtihonlar</h3>
            <ul className="space-y-2 text-gray-500">
              {["IELTS", "Turk Tili", "Rus Tili", "CEFR"].map((exam) => (
                <li key={exam}>
                  <a href="#" className="hover:text-blue-950 text-gray-500">
                    {exam}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kompaniya */}
          <div>
            <h3 className="font-bold mb-4">Kompaniya</h3>
            <ul className="space-y-2 text-gray-500">
              {["Biz Haqimizda", "Blog", "Narxlar", "Aloqa"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-950 text-gray-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Yordam */}
          <div>
            <h3 className="font-bold mb-4">Yordam</h3>
            <ul className="space-y-2 text-gray-500">
              {["FAQ", "Qo'llab-quvvatlash", "Maxfiylik", "Shartlar"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-950 text-gray-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} ExamPrep. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
