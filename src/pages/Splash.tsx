
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center text-white px-6">
      <div className="text-center mb-8">        
        <div className="mb-12">
          <img 
            src="/lovable-uploads/09a504ae-e1fc-4f6c-8f29-a7f626a53e68.png" 
            alt="Team Collaboration" 
            className="w-80 h-80 object-contain mx-auto"
          />
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <div className="w-8 h-1 bg-white rounded"></div>
            <div className="w-2 h-1 bg-white/50 rounded"></div>
            <div className="w-2 h-1 bg-white/50 rounded"></div>
          </div>
        </div>
        
        <Button 
          onClick={() => navigate('/dashboard')}
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg w-64"
        >
          Mulai
        </Button>
      </div>
    </div>
  );
};

export default Splash;
