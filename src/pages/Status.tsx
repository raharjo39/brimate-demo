
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Status = () => {
  const navigate = useNavigate();

  const members = [
    {
      name: "Karina Putri",
      username: "@karinap",
      role: "Creator",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      status: ""
    },
    {
      name: "Aurel Hermansyah",
      username: "@aurelh",
      role: "Member",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      status: "Approved"
    },
    {
      name: "Fadhil Krisna",
      username: "@fadhilkr",
      role: "Member",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      status: "Approved"
    },
    {
      name: "Andi Raviali",
      username: "@shafiramylove",
      role: "Member",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      status: "Approved"
    },
    {
      name: "Abiyan Daffa",
      username: "@daffaa",
      role: "Member",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      status: "Approved"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate('/approval')}
          className="text-white hover:bg-white/20"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="w-8"></div>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-bold mb-2">Status Pengajuan</h1>
        <h2 className="text-xl font-bold">Penarikan Dana</h2>
      </div>

      {/* Checklist Animation */}
      <div className="flex justify-center mb-8">
        <img 
          src="/lovable-uploads/60c3e90f-f1e2-4c54-b3ef-87a043a327a7.png"
          alt="Checklist Animation"
          className="w-48 h-32 object-contain"
        />
      </div>

      {/* Trip Hashtag */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">#TripKeTokyo</h2>
      </div>

      {/* Members List */}
      <div className="px-6 space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                <img 
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-white">{member.name}</p>
                <p className="text-sm text-white/75">{member.username} • {member.role}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {member.status && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
                  {member.status}
                </span>
              )}
              <Button variant="ghost" size="sm" className="text-white">
                ⋯
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="px-6 mt-8">
        <Button 
          onClick={() => navigate('/realization')}
          className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-2xl py-4 font-semibold text-lg"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Status;
