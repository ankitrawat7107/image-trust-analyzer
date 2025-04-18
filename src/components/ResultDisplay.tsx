
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, ImageIcon } from "lucide-react";

interface ResultDisplayProps {
  result: {
    isFake: boolean;
    confidence: number;
  } | null;
  isProcessing: boolean;
}

export function ResultDisplay({ result, isProcessing }: ResultDisplayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detection Result</CardTitle>
        <CardDescription>
          Analysis of the uploaded image
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isProcessing ? (
          <div className="space-y-4 py-8">
            <p className="text-center text-gray-600">Analyzing image...</p>
            <Progress value={45} className="w-full" />
          </div>
        ) : result ? (
          <div className="space-y-6 py-4">
            <div className={`p-4 rounded-lg text-white ${result.isFake ? 'bg-red-500' : 'bg-green-500'}`}>
              <p className="text-lg font-semibold">
                {result.isFake
                  ? "This image appears to be a deepfake"
                  : "This image appears to be authentic"}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-1">Confidence level</p>
              <div className="flex items-center">
                <Progress value={result.confidence} className="flex-1 mr-4" />
                <span className="text-sm font-medium">{result.confidence}%</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-12 text-center text-gray-500">
            <ImageIcon className="mx-auto h-12 w-12 text-gray-300" />
            <p className="mt-2">No image analyzed yet</p>
            <p className="text-xs">Upload and analyze an image to see results</p>
          </div>
        )}
      </CardContent>
      {result && (
        <CardFooter>
          <Button variant="outline" className="w-full">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
