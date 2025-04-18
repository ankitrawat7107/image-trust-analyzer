
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface HistoryItem {
  id: number;
  filename: string;
  timestamp: Date;
  isFake: boolean;
  confidence: number;
  preview: string;
}

interface HistoryListProps {
  items: HistoryItem[];
  onClearHistory: () => void;
}

export function HistoryList({ items, onClearHistory }: HistoryListProps) {
  if (items.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>History</CardTitle>
          <CardDescription>
            Your recently analyzed images
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <p>No history yet</p>
            <p className="text-xs">Analyzed images will appear here</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>History</CardTitle>
          <CardDescription>
            Your recently analyzed images
          </CardDescription>
        </div>
        <Button variant="outline" size="sm" onClick={onClearHistory}>
          Clear History
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden flex flex-col"
            >
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src={item.preview}
                  alt={item.filename}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium text-white rounded ${
                    item.isFake ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {item.isFake ? "Fake" : "Real"}
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium truncate">{item.filename}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-gray-500">
                    {item.timestamp.toLocaleDateString()} {item.timestamp.toLocaleTimeString()}
                  </p>
                  <p className="text-xs font-medium">{item.confidence}% confidence</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
