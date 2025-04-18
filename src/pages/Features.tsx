
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Upload, Shield, Zap, BarChart } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-deepfake-600" />,
      title: "Advanced Detection",
      description: "Our AI model can detect even the most sophisticated deepfakes with high accuracy.",
    },
    {
      icon: <Zap className="h-8 w-8 text-deepfake-600" />,
      title: "Fast Results",
      description: "Get your results within seconds, no matter the image resolution or complexity.",
    },
    {
      icon: <Upload className="h-8 w-8 text-deepfake-600" />,
      title: "Easy to Use",
      description: "Simply upload your image and get an instant analysis with no technical expertise required.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-deepfake-600" />,
      title: "Detailed Reports",
      description: "Receive comprehensive reports with confidence scores and analysis metrics.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Features</h1>
        <p className="text-xl text-gray-600">
          DeepTrust provides cutting-edge deepfake detection technology that's accessible to everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
        {features.map((feature, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-sm">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Why Choose DeepTrust?</h2>
        
        <div className="space-y-4">
          {[
            "State-of-the-art AI models with regular updates",
            "Privacy-focused - we don't store your images",
            "Support for all common image formats",
            "Simple, intuitive user interface",
            "Detailed analytics for each analysis",
            "Continuous improvement based on user feedback"
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-4 flex-shrink-0 rounded-full bg-deepfake-100 p-1">
                <Check className="h-4 w-4 text-deepfake-600" />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-8">Create an account to access all features and start analyzing images today.</p>
        <Button asChild size="lg">
          <Link to="/sign-up">Sign Up Now</Link>
        </Button>
      </div>
    </div>
  );
}
