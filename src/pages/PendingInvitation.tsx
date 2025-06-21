
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PendingInvitation = () => {
  const navigate = useNavigate();

  const members = [
    {
      name: "Aurel Hermansyah",
      username: "@aurelh",
      status: "Pending Member",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fadhil Krisna",
      username: "@fadhilkr",
      status: "Pending Member",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Andi Raviali",
      username: "@shafiramylove",
      status: "Member",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Abiyan Daffa",
      username: "@daffaa",
      status: "Member",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Karina Putri",
      username: "@karinap",
      status: "Creator",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12 border-b">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate('/target')}
          className="text-blue-500 hover:bg-blue-50"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="w-8"></div>
      </div>

      {/* Rocket Animation */}
      <div className="flex justify-center py-8">
        <div className="relative">
          <img 
            src="/lovable-uploads/60c3e90f-f1e2-4c54-b3ef-87a043a327a7.png"
            alt="Rocket Animation"
            className="w-48 h-32 object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Pending Invitation</h1>
      </div>

      {/* Goal Info */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between border rounded-lg px-4 py-3">
          <span className="text-gray-700">Liburan akhir tahun ke Tokyo</span>
          <span className="text-gray-400">▼</span>
        </div>
      </div>

      {/* Add Member Section */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-700">Tambah Member</span>
        </div>
        
        <div className="mt-3 border rounded-lg px-4 py-3 flex items-center space-x-2 text-gray-500">
          <span>👤</span>
          <span>Masukan Alias BRIMO Teman Kamu</span>
        </div>
      </div>

      {/* Members List */}
      <div className="px-6">
        <div className="space-y-4">
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
                  <p className="font-semibold text-gray-800">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.username}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  member.status === "Creator" 
                    ? "bg-blue-100 text-blue-600" 
                    : member.status === "Member"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {member.status}
                </span>
                <Button variant="ghost" size="sm" className="text-gray-400">
                  ⋯
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingInvitation;
