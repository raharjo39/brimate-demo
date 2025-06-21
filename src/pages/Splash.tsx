
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center text-white px-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-8 transform -rotate-12">
          Bersama Lebih Mudah
        </h1>
        
        <div className="mb-12">
          <img 
            src="/lovable-uploads/6b80c41b-9a94-465c-a18d-f1b4850738b6.png" 
            alt="BRImate Illustration" 
            className="w-80 h-80 object-contain mx-auto"
          />
        </div>
        
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">
            BRI<span className="text-orange-400">mate</span>
          </h2>
        </div>
        
        <p className="text-lg mb-8 leading-relaxed max-w-sm mx-auto">
          Kelola tujuan bersama, nabung otomatis, dan nikmati
          bunga hingga 3% p.a. Untuk kamu, pasangan, teman,
          dan komunitas hingga 50 orang.
        </p>
        
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
