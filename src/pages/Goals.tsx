
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Goals = () => {
  const navigate = useNavigate();

  const goals = [
    { name: "Liburan", icon: "🚙", color: "bg-orange-100" },
    { name: "Pendidikan", icon: "🎓", color: "bg-gray-100" },
    { name: "Pernikahan", icon: "❤️", color: "bg-red-100" },
    { name: "Iuran Wajib", icon: "💰", color: "bg-green-100" },
    { name: "Kendaraan", icon: "🛵", color: "bg-red-100" },
    { name: "Rumah", icon: "🏠", color: "bg-brown-100" },
    { name: "Keluarga", icon: "👶", color: "bg-pink-100" },
    { name: "Ibadah", icon: "🤲", color: "bg-yellow-100" },
    { name: "Hiburan", icon: "🎬", color: "bg-blue-100" },
    { name: "Perabotan", icon: "🪑", color: "bg-brown-100" },
    { name: "Arisan", icon: "👥", color: "bg-green-100" },
    { name: "Lainnya", icon: "📦", color: "bg-blue-100" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate('/dashboard')}
          className="text-white hover:bg-white/20"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold">Pilih Goals Kamu</h1>
        <div className="w-8"></div>
      </div>

      {/* User Info */}
      <div className="px-6 mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold">Karina Putri</p>
            <p className="text-sm opacity-75">Creator</p>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="px-6">
        <h2 className="text-lg font-semibold mb-6">Recomended For You</h2>
        
        <div className="grid grid-cols-3 gap-4">
          {goals.map((goal, index) => (
            <Button
              key={index}
              onClick={() => navigate('/create-goal', { state: { goalType: goal.name } })}
              className="flex flex-col items-center p-4 bg-white hover:bg-gray-50 text-gray-800 rounded-2xl h-24 transition-all hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-2xl ${goal.color} flex items-center justify-center mb-2`}>
                <span className="text-2xl">{goal.icon}</span>
              </div>
              <span className="text-xs font-medium">{goal.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/20 backdrop-blur-sm border-t border-white/10">
        <div className="flex justify-around py-3">
          <button className="flex flex-col items-center text-white/70">
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center text-white">
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center text-white/70">
            <span className="text-xs">Premium</span>
          </button>
          <button className="flex flex-col items-center text-white/70">
            <span className="text-xs">Setting</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goals;
