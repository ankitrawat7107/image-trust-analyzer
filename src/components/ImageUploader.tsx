
import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, Trash2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ImageUploaderProps {
  onProcessImage: (file: File, preview: string) => void;
  isProcessing: boolean;
}

export function ImageUploader({ onProcessImage, isProcessing }: ImageUploaderProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }
    
    setSelectedFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  // Clear selected file
  function clearSelection() {
    setSelectedFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  // Process the image
  function processImage() {
    if (!selectedFile || !imagePreview) return;
    onProcessImage(selectedFile, imagePreview);
  }

  // Handle drag over event
  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  // Handle drop event
  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      
      // Check if file is an image
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file");
        return;
      }
      
      setSelectedFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        {!imagePreview ? (
          <div 
            className="border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              JPEG, PNG up to 10MB
            </p>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/jpeg,image/png"
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500 truncate">
                {selectedFile?.name}
              </p>
              <Button variant="ghost" size="sm" onClick={clearSelection}>
                <Trash2 className="h-4 w-4 mr-2" />
                Clear
              </Button>
            </div>
            
            {isProcessing ? (
              <div className="space-y-2">
                <p className="text-center text-sm text-gray-600">Analyzing image...</p>
                <Progress value={45} className="w-full" />
              </div>
            ) : (
              <Button 
                className="w-full" 
                onClick={processImage} 
                disabled={!selectedFile}
              >
                Analyze Image
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
