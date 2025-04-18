
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About DeepTrust</h1>
          <p className="text-xl text-gray-600">
            Our mission is to help people verify the authenticity of digital content in an era where deepfakes are becoming increasingly sophisticated.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700">
              DeepTrust was founded in 2023 by a team of AI researchers and cybersecurity experts who recognized the growing threat of deepfake technology. As synthetic media became more convincing and easier to create, we saw the need for accessible tools that could help people verify the content they consume online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
            <p className="text-gray-700 mb-4">
              We use advanced deep learning algorithms that analyze visual inconsistencies, artifacts, and patterns that are typical in AI-generated or manipulated images. Our models are trained on diverse datasets and continuously updated to keep pace with evolving deepfake techniques.
            </p>
            <p className="text-gray-700">
              Unlike many detection systems that only work for specific types of deepfakes, DeepTrust's technology is designed to identify a wide range of image manipulations, from face swaps to entire synthetic images.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-700">
              Our team consists of experts in computer vision, machine learning, and digital forensics, all united by a commitment to building a more trustworthy digital environment. We collaborate with academic researchers and industry partners to continuously improve our detection capabilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              We envision a future where people can easily verify the authenticity of digital content, helping to preserve trust in our increasingly digital world. While we cannot eliminate deepfakes entirely, we believe that accessible detection tools are essential for maintaining media literacy and critical thinking in the digital age.
            </p>
          </section>
        </div>

        <div className="text-center pt-8">
          <p className="text-lg mb-6">Ready to try our deepfake detection technology?</p>
          <Button asChild size="lg">
            <Link to="/sign-up">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
