
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1278CA] flex flex-col justify-between text-white">
      <div className="flex-1 w-full flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
          <img 
            src="/lovable-uploads/09a504ae-e1fc-4f6c-8f29-a7f626a53e68.png" 
            alt="Team Collaboration" 
            className="w-full h-auto max-h-[96vh] object-contain scale-[1.2]"
          />
        </div>
        
        <div className="flex justify-center py-4">
          <div className="flex space-x-2">
            <div className="w-8 h-1 bg-white rounded"></div>
            <div className="w-2 h-1 bg-white/50 rounded"></div>
            <div className="w-2 h-1 bg-white/50 rounded"></div>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-md mx-auto px-6 pb-8 -translate-y-2.5">
        <Button 
          onClick={() => navigate('/dashboard')}
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg w-full"
        >
          Mulai
        </Button>
      </div>
    </div>
  );
};

export default Splash;
