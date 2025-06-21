
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MemberDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate('/target')}
          className="text-white hover:bg-white/20 px-3 py-1 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span className="text-sm">Back</span>
        </Button>
        <h1 className="text-xl font-semibold">Member</h1>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* User Progress Card */}
      <div className="px-6 mb-8">
        <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                alt="Fadhil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Fadhil Krisna</p>
                  <p className="text-sm opacity-75">Member</p>
                  <p className="text-sm opacity-75">Trip Ke Tokyo</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">33.3%</p>
                  <p className="text-sm opacity-75">(66.7% remaining)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Team Section */}
      <div className="px-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Progress Team</h2>
        
        {/* Team Legend */}
        <div className="flex justify-center space-x-4 mb-4 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-pink-400"></div>
            <span>Fadhil</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span>Abiyan</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span>Andi</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-blue-300"></div>
            <span>Karina</span>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="text-sm w-12">Fadhil</span>
            <div className="flex-1 bg-white/20 rounded-full h-6">
              <div className="bg-pink-400 h-6 rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm w-12">Abiyan</span>
            <div className="flex-1 bg-white/20 rounded-full h-6">
              <div className="bg-purple-400 h-6 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm w-12">Andi</span>
            <div className="flex-1 bg-white/20 rounded-full h-6">
              <div className="bg-blue-400 h-6 rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm w-12">Karina</span>
            <div className="flex-1 bg-white/20 rounded-full h-6">
              <div className="bg-blue-300 h-6 rounded-full transition-all duration-500" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>

        {/* Progress Scale */}
        <div className="flex justify-between text-xs mt-2 opacity-75">
          <span>0</span>
          <span>20</span>
          <span>40</span>
          <span>60</span>
          <span>80</span>
          <span>100</span>
        </div>
      </div>

      {/* Progress Details Card */}
      <div className="px-6 mb-6">
        <div className="bg-gray-800 rounded-2xl p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold">Progress</h3>
              <p className="text-sm opacity-75">Details</p>
            </div>
            <div className="text-right">
              <span className="text-sm opacity-75">18 Mei 2024</span>
              <div className="text-xl">⋯</div>
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Tabungan yang kurang</span>
              <span className="text-red-400 font-semibold">Rp 16.000.000,00</span>
            </div>
            <div className="flex justify-between">
              <span>Tabungan BRImate <span className="text-pink-400">Fadhil</span> Saat Ini</span>
              <span className="font-semibold">Rp 8.000.000,00</span>
            </div>
            <div className="flex justify-between">
              <span>Target Nabung Per Bulan</span>
              <span className="font-semibold">Rp 4.000.000,00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reminder Button */}
      <div className="px-6">
        <Button 
          onClick={() => navigate('/approval')}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-2xl py-4 flex items-center justify-center space-x-2"
        >
          <span className="text-2xl">⏰</span>
          <span className="font-semibold">Kirim Reminder</span>
        </Button>
      </div>
    </div>
  );
};

export default MemberDetails;
