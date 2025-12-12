import { Navigation } from "@/components/navigation";
import { ContentForm } from "@/components/content-form";
import { ResultsPanel } from "@/components/results-panel";
import { useState, useEffect } from "react";
import { type AeoContent } from "@shared/schema";

export default function Generator() {
  const [generatedContent, setGeneratedContent] = useState<AeoContent | null>(null);

  useEffect(() => {
    document.title = "AEOFLOW - Generator AEO";
  }, []);

  return (
    <div className="min-h-full bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContentForm onContentGenerated={setGeneratedContent} />
          <ResultsPanel generatedContent={generatedContent} />
        </div>
      </main>
    </div>
  );
}
