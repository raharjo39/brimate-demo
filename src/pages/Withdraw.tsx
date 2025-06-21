
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Withdraw = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("45.000.000,00");

  const handleNumberClick = (num: string) => {
    if (num === "⌫") {
      setAmount(amount.slice(0, -1));
    } else if (num === "00") {
      setAmount(amount + "00");
    } else {
      setAmount(amount + num);
    }
  };

  const numberPad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["0", "00", "⌫"]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate('/trip-details')}
          className="text-white hover:bg-white/20 px-3 py-1 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span className="text-sm">Back</span>
        </Button>
        <h1 className="text-xl font-semibold">Withdraw</h1>
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
                  <p className="text-sm opacity-75">(100%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amount Display */}
      <div className="px-6 mb-8 text-center">
        <div className="mb-4">
          <p className="text-lg opacity-75 mb-2">Rp</p>
          <h2 className="text-4xl font-bold">{amount}</h2>
          <div className="w-full h-0.5 bg-white/30 mt-2">
            <div className="w-24 h-0.5 bg-white mx-auto"></div>
          </div>
        </div>
        <p className="text-lg opacity-75">Type Here</p>
      </div>

      {/* Number Pad */}
      <div className="px-8 mb-8">
        <div className="grid grid-cols-3 gap-4">
          {numberPad.flat().map((num, index) => (
            <Button
              key={index}
              onClick={() => handleNumberClick(num)}
              variant="ghost"
              className="h-16 text-2xl font-semibold text-white hover:bg-white/20 rounded-2xl"
            >
              {num}
            </Button>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="px-6">
        <Button 
          onClick={() => navigate('/approval')}
          className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-2xl py-4 font-semibold text-lg"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Withdraw;
