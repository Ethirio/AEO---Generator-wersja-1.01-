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
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Twój Plan i Limity
            </CardTitle>
            <CardDescription className="mt-1">
              Plan: Lite. Limit: 10 stron dziennie. W historii przechowywane jest 10 ostatnich wygenerowanych stron. Zarządzaj subskrypcją w panelu klienta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Dzienne wykorzystanie</span>
                <span className="font-medium" data-testid="text-usage-count">
                  {user?.dailyUsageCount || 0} / {DAILY_LIMIT}
                </span>
              </div>
              <Progress value={usagePercentage} className="h-2" data-testid="progress-usage" />
              {user && user.dailyUsageCount >= DAILY_LIMIT && (
                <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
                  Wykorzystano cały limit dzienny
                </p>
              )}
              {user && user.subscriptionPeriodEnd && (
                <p className="text-xs text-muted-foreground mt-2">
                  Odnowienie: {new Date(user.subscriptionPeriodEnd).toLocaleDateString('pl-PL')}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Content Management Section */}
        <Card>
          <CardHeader>
            <CardTitle>Panel zarządzania stronami</CardTitle>
          </CardHeader>
          <CardContent>
            {contents.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Brak wygenerowanych treści.</p>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {contents.map((content) => {
                  const aiScore = content.aiScore ? JSON.parse(content.aiScore) : null;
                  
                  return (
                    <div key={content.id} className="py-4 first:pt-0 last:pb-0" data-testid={`content-item-${content.id}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground truncate">
                            {content.question}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Wygenerowano {new Date(content.createdAt).toLocaleDateString('pl-PL')} {content.author}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy(content)}
                            data-testid={`button-copy-${content.id}`}
                          >
                            <Copy className="h-4 w-4 mr-1" />
                            Kopiuj
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(content.id)}
                            data-testid={`button-delete-${content.id}`}
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Usuń
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
