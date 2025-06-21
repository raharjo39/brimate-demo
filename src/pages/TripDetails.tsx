import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TripDetails = () => {
  const navigate = useNavigate();

  const members = [
    { 
      name: "Karina Putri", 
      username: "@karinap", 
      role: "Creator", 
      progress: 100,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    { 
      name: "Aurel Hermansyah", 
      username: "@aurelh", 
      role: "Member", 
      progress: 100,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    { 
      name: "Fadhil Krisna", 
      username: "@fadhilkr", 
      role: "Member", 
      progress: 33.3,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    { 
      name: "Andi Raviali", 
      username: "@shafiramylove", 
      role: "Member", 
      progress: 33.3,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    { 
      name: "Abiyan Daffa", 
      username: "@daffaa", 
      role: "Member", 
      progress: 33.3,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

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
        <div className="w-8"></div>
      </div>

      {/* Trip Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Trip Ke Tokyo</h1>
      </div>

      {/* Suitcase Animation */}
      <div className="flex justify-center mb-8">
        <img 
          src="/lovable-uploads/17f7d6c9-d436-42b4-9eaa-61f7fc1d30fa.png"
          alt="Travel Suitcase"
          className="w-48 h-32 object-contain"
        />
      </div>

      {/* Progress Summary */}
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold mb-2">Saldo Bersama</h2>
        <div className="text-3xl font-bold mb-2">
          Rp 120.000.000,00 <span className="text-lg">(100%)</span>
        </div>
        <p className="text-sm opacity-75">Target: Rp 120.000.000,00</p>
      </div>

      {/* Members List */}
      <div className="px-6 space-y-4 mb-8">
        {members.map((member, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                <img 
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm opacity-75">{member.username} • {member.role}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
                100%
              </div>
              <Button variant="ghost" size="sm" className="text-white">
                ⋯
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Withdraw Button */}
      <div className="px-6">
        <Button 
          onClick={() => navigate('/withdraw')}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-2xl py-4 font-semibold text-lg"
        >
          Tarik Dana
        </Button>
      </div>
    </div>
  );
};

export default TripDetails;
