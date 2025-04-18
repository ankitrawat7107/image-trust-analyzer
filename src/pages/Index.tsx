
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Upload, Check } from "lucide-react";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepfake-800 to-deepfake-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Detect Deepfakes with Advanced AI Technology
              </h1>
              <p className="text-xl text-gray-200 md:pr-12">
                Our cutting-edge AI can identify manipulated images with high accuracy, helping you verify authenticity in an age of digital deception.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Button size="lg" asChild>
                  <Link to="/sign-up">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" 
                alt="AI Technology" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detecting deepfakes has never been easier. Our process is simple, fast, and accurate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Upload className="h-12 w-12 text-deepfake-600" />,
                title: "Upload Your Image",
                description: "Select and upload any suspicious image you want to analyze."
              },
              {
                icon: <Zap className="h-12 w-12 text-deepfake-600" />,
                title: "AI Analysis",
                description: "Our advanced AI processes the image to detect signs of manipulation."
              },
              {
                icon: <Shield className="h-12 w-12 text-deepfake-600" />,
                title: "Get Results",
                description: "Receive a detailed report with confidence score in seconds."
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              DeepTrust combines powerful technology with intuitive design to deliver the best deepfake detection experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "High Accuracy Detection",
                description: "Our AI model achieves over 95% accuracy in identifying manipulated images."
              },
              {
                title: "Fast Processing Time",
                description: "Get your results in seconds, not minutes, regardless of image complexity."
              },
              {
                title: "Comprehensive Reports",
                description: "Receive detailed analysis with confidence scores and highlighted areas of concern."
              },
              {
                title: "Privacy Focused",
                description: "Your images are analyzed securely and never stored on our servers without permission."
              }
            ].map((feature, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deepfake-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Verify Your Images?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of users who trust our platform for reliable deepfake detection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" asChild>
              <Link to="/sign-up">Create Free Account</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the many satisfied users who rely on DeepTrust for their verification needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "DeepTrust has become an essential tool for verifying images before we publish them. Fast, accurate, and easy to use.",
                author: "Sarah J., Journalist"
              },
              {
                quote: "As a social media manager, I need to ensure all content is authentic. DeepTrust gives me confidence in the content I share.",
                author: "Michael T., Social Media Manager"
              },
              {
                quote: "The detailed reports help me understand exactly why an image might be manipulated. Great educational tool.",
                author: "David R., Educator"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="font-medium text-deepfake-700">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
