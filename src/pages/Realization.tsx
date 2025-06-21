
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Realization = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate('/status')}
          className="text-white hover:bg-white/20 px-3 py-1 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span className="text-sm">Back</span>
        </Button>
        <h1 className="text-xl font-semibold">Realisasi</h1>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* User Info Card */}
      <div className="px-6 mb-8">
        <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                alt="Karina"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Karina Putri</p>
                  <p className="text-sm opacity-75">Creator</p>
                  <p className="text-sm opacity-75">Trip Ke Tokyo</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold bg-green-500 px-2 py-1 rounded-full">Achieved</p>
                  <p className="text-sm opacity-75">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Withdrawal Details Card */}
      <div className="px-6 mb-8">
        <div className="bg-gray-800 rounded-2xl p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold">Penarikan</h3>
              <p className="text-sm opacity-75">Details</p>
            </div>
            <div className="text-right">
              <span className="text-sm opacity-75">18 Juni 2025</span>
              <div className="text-xl">⋯</div>
              <p className="text-sm text-green-400">Succeed</p>
            </div>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="text-2xl font-bold text-white">
              Rp 45.000.000,00
            </div>
            <div>
              <p className="font-semibold">Keterangan:</p>
              <p className="opacity-75">Pembelian Tiket PP CGK - TYO (5 Pax)</p>
              <p className="opacity-75">Singapore Airlines (SQ)</p>
            </div>
            <div className="border-t border-gray-600 pt-3">
              <p className="font-semibold">Sisa Saldo BRImate:</p>
              <p className="text-xl font-bold">Rp 75.000.000,00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attachment Section */}
      <div className="px-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Attachment</h3>
          <span className="text-sm">Sort by Latest ▼</span>
        </div>
        
        <div className="border-2 border-dashed border-white/30 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center relative">
              <span className="text-2xl">📁</span>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">⬆</span>
              </div>
            </div>
          </div>
          <p className="text-white font-semibold">Unggah Dokumen Realisasi</p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="px-6">
        <Button 
          onClick={() => navigate('/dashboard')}
          className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-2xl py-4 font-semibold text-lg"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Realization;
