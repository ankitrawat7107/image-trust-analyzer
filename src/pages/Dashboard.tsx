
import { useState } from "react";
import { ImageUploader } from "@/components/ImageUploader";
import { ResultDisplay } from "@/components/ResultDisplay";
import { HistoryList } from "@/components/HistoryList";

interface HistoryItem {
  id: number;
  filename: string;
  timestamp: Date;
  isFake: boolean;
  confidence: number;
  preview: string;
}

export default function Dashboard() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<null | {
    isFake: boolean;
    confidence: number;
  }>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Process the image
  function processImage(file: File, preview: string) {
    setIsProcessing(true);
    
    // Simulate API call to deepfake detection service
    setTimeout(() => {
      const fakeResult = {
        isFake: Math.random() > 0.5, // Random result for demo
        confidence: Math.round(Math.random() * 40 + 60), // Random confidence between 60-100%
      };
      
      setResult(fakeResult);
      setIsProcessing(false);
      
      // Add to history
      setHistory([
        {
          id: Date.now(),
          filename: file.name,
          timestamp: new Date(),
          isFake: fakeResult.isFake,
          confidence: fakeResult.confidence,
          preview: preview,
        },
        ...history,
      ]);
    }, 2000);
  }

  // Clear history
  function clearHistory() {
    setHistory([]);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Upload an image to check if it's a deepfake</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upload Section */}
        <div className="lg:col-span-2">
          <ImageUploader 
            onProcessImage={processImage} 
            isProcessing={isProcessing} 
          />
        </div>

        {/* Results Section */}
        <div>
          <ResultDisplay 
            result={result} 
            isProcessing={isProcessing} 
          />
        </div>
      </div>

      {/* History Section */}
      <HistoryList 
        items={history} 
        onClearHistory={clearHistory} 
      />
    </div>
  );
}
