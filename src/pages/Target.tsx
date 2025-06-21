
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Target = () => {
  const navigate = useNavigate();

  const teamMembers = [
    { name: "Fadhil", progress: 90, color: "bg-pink-400" },
    { name: "Abiyan", progress: 75, color: "bg-purple-400" },
    { name: "Andi", progress: 60, color: "bg-blue-400" },
    { name: "Karina", progress: 20, color: "bg-blue-300" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate('/dashboard')}
          className="text-white hover:bg-white/20 px-3 py-1 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span className="text-sm">Back</span>
        </Button>
        <h1 className="text-xl font-semibold">Target</h1>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* User Progress Card */}
      <div className="px-6 mb-6">
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
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center space-x-1">
              <div className={`w-3 h-3 rounded-full ${member.color}`}></div>
              <span>{member.name}</span>
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="space-y-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-sm w-12">{member.name}</span>
              <div className="flex-1 bg-white/20 rounded-full h-6">
                <div 
                  className={`${member.color} h-6 rounded-full transition-all duration-500`}
                  style={{ width: `${member.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
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
              <span className="text-sm opacity-75">18 Mei 2025</span>
              <div className="text-xl">⋯</div>
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Tabungan yang kurang</span>
              <span className="text-red-400 font-semibold">Rp 16.000.000,00</span>
            </div>
            <div className="flex justify-between">
              <span>Tabungan BRImate kamu saat ini</span>
              <span className="font-semibold">Rp 8.000.000,00</span>
            </div>
            <div className="flex justify-between">
              <span>Target Nabung Per Bulan</span>
              <span className="font-semibold">Rp 4.000.000,00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto Debit Button */}
      <div className="px-6 mb-6">
        <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-2xl py-4 flex items-center justify-center space-x-2">
          <span className="text-2xl">⏰</span>
          <span className="font-semibold">Autodebit / Schedule Payment</span>
        </Button>
      </div>

      {/* Top Up Button */}
      <div className="px-6">
        <Button 
          onClick={() => navigate('/topup')}
          className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-2xl py-4 font-semibold text-lg"
        >
          Top Up
        </Button>
      </div>
    </div>
  );
};

export default Target;
