import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { type AeoContent, type User } from "@shared/schema";
import { Copy, Eye, Trash2, Zap, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const { toast } = useToast();
  const { user, isLoading: isAuthLoading } = useAuth();

  useEffect(() => {
    document.title = "AEOFLOW - Panel";
  }, []);
  
  // Clear cache if user is not authenticated
  useEffect(() => {
    if (!isAuthLoading && !user) {
      queryClient.clear();
    }
  }, [user, isAuthLoading]);
  
  const { data: contents = [], isLoading } = useQuery<AeoContent[]>({
    queryKey: ["/api/user/aeo-content"],
  });

  const handleCopy = async (content: AeoContent) => {
    if (content.generatedHtml) {
      try {
        await navigator.clipboard.writeText(content.generatedHtml);
        toast({
          title: "Skopiowano!",
          description: "Kod HTML został skopiowany do schowka.",
        });
      } catch (error) {
        toast({
          title: "Błąd",
          description: "Nie udało się skopiować kodu.",
          variant: "destructive",
        });
      }
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await apiRequest("DELETE", `/api/aeo-content/${id}`);
      queryClient.invalidateQueries({ queryKey: ["/api/user/aeo-content"] });
      toast({
        title: "Usunięto",
        description: "Treść została usunięta.",
      });
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Nie udało się usunąć treści.",
        variant: "destructive",
      });
    }
  };

  if (isLoading || isAuthLoading) {
    return (
      <div className="min-h-full bg-background">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">Ładowanie...</div>
        </main>
      </div>
    );
  }

  const hasActiveSubscription = user?.plan === 'lite' && user?.subscriptionStatus === 'active';
  
  // Redirect users without subscription to checkout (only after auth loads)
  if (!hasActiveSubscription) {
    const LITE_PRICE_ID = 'price_1SRJGvJlhtvRW3zlpCK0Mxle';
    window.location.href = `/pricing?priceId=${LITE_PRICE_ID}&plan=lite`;
    return null;
  }
  
  const DAILY_LIMIT = 10; // Sztywny limit dla planu Lite
  const usagePercentage = user && hasActiveSubscription
    ? Math.round((user.dailyUsageCount / DAILY_LIMIT) * 100)
    : 0;

  return (
    <div className="min-h-full bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Plan & Limits Section */}
        <Card className="mb-6" data-testid="card-plan-limits">

