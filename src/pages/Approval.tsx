
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Approval = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate('/withdraw')}
          className="text-white hover:bg-white/20 px-3 py-1 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span className="text-sm">Back</span>
        </Button>
        <h1 className="text-xl font-semibold">Approval</h1>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* Trip Info Card */}
      <div className="px-6 mb-8">
        <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-2xl">
              🚐
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Trip Ke Tokyo</p>
                  <p className="text-sm opacity-75">5 Members</p>
                  <p className="text-sm opacity-75">Rp 120.000.000,00</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold bg-green-500 px-2 py-1 rounded-full">Achieved</p>
                  <p className="text-sm opacity-75 text-yellow-300">Pending Approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
            alt="Fadhil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Fadhil Krisna</h2>
        <p className="text-lg opacity-75">@fadhilkr • Member</p>
      </div>

      {/* Withdrawal Details Card */}
      <div className="px-6 mb-8">
        <div className="bg-gray-800 rounded-2xl p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold">Penarikan</h3>
              <p className="text-sm opacity-75">Creator: Karina Putri</p>
            </div>
            <div className="text-right">
              <span className="text-sm opacity-75">18 Juni 2025</span>
              <div className="text-xl">⋯</div>
              <p className="text-sm text-yellow-300">Pending</p>
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="text-2xl font-bold text-white mb-2">
              Rp 45.000.000,00
            </div>
            <div>
              <p className="font-semibold">Keterangan:</p>
              <p className="opacity-75">Pembelian Tiket PP CGK - TYO (5 Pax)</p>
              <p className="opacity-75">Singapore Airlines (SQ)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 space-y-4">
        <Button 
          onClick={() => navigate('/status')}
          className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-2xl py-4 font-semibold text-lg"
        >
          Setuju
        </Button>
        
        <Button 
          variant="outline"
          className="w-full border-white text-white hover:bg-white/20 rounded-2xl py-4 font-semibold text-lg"
        >
          Tolak
        </Button>
      </div>
    </div>
  );
};

export default Approval;
