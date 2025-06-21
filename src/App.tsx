
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import CreateGoal from "./pages/CreateGoal";
import Target from "./pages/Target";
import TopUp from "./pages/TopUp";
import PendingInvitation from "./pages/PendingInvitation";
import TripDetails from "./pages/TripDetails";
import MemberDetails from "./pages/MemberDetails";
import Withdraw from "./pages/Withdraw";
import Approval from "./pages/Approval";
import Status from "./pages/Status";
import Realization from "./pages/Realization";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/create-goal" element={<CreateGoal />} />
          <Route path="/target" element={<Target />} />
          <Route path="/topup" element={<TopUp />} />
          <Route path="/pending-invitation" element={<PendingInvitation />} />
          <Route path="/trip-details" element={<TripDetails />} />
          <Route path="/member-details" element={<MemberDetails />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/approval" element={<Approval />} />
          <Route path="/status" element={<Status />} />
          <Route path="/realization" element={<Realization />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
