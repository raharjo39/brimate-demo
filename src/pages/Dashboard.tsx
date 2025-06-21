
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      {/* Welcome Section */}
      <div className="px-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm opacity-90">Welcome back</p>
            <h1 className="text-2xl font-bold">Karina Putri</h1>
            <p className="text-sm opacity-75">👑 No Plan</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Balance Section */}
      <div className="px-6 mb-6">
        <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
          <p className="text-sm opacity-90">Saldo BRImate Kamu</p>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Rp 0</h2>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm">↗️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Points Section */}
      <div className="px-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">BRI</span>
            </div>
            <span className="font-semibold">100 points</span>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/20 border-white/30 text-white hover:bg-white/30"
          >
            Tukarkan Sekarang
          </Button>
        </div>
      </div>

      {/* Create Plan Button */}
      <div className="px-6 mb-6">
        <Button 
          onClick={() => navigate('/goals')}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-2xl py-4 flex items-center justify-center space-x-2"
        >
          <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">+</span>
          <span className="font-semibold">Buat BRImate Plan Kamu Sekarang</span>
        </Button>
      </div>

      {/* Plans List */}
      <div className="px-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Daftar BRImate Plan Kamu</h3>
        </div>
        
        <div className="relative mb-4">
          <Input 
            placeholder="Search here" 
            className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl pl-4 pr-12"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-red-400 to-purple-600 rounded-2xl p-4 h-32 relative">
            <p className="text-white font-semibold">Belum</p>
            <p className="text-white/90">Ada Plan</p>
            <div className="absolute bottom-4 right-4">
              <div className="w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">+</span>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="text-white/70">♡</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-4 h-32 relative">
            <div className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold mb-2 w-fit">
              COMING SOON
            </div>
            <p className="text-white font-semibold">BRImate</p>
            <p className="text-white/90">Plus</p>
            <div className="absolute bottom-4 right-4">
              <div className="w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">+</span>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="text-white/70">♡</span>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Section */}
      <div className="px-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Transaction</h3>
          <span className="text-sm">Sort by Latest ▼</span>
        </div>
        
        <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📁</span>
            </div>
            <p className="text-white font-semibold">Belum Ada Transaksi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
