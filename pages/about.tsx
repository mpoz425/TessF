import React from 'react';
import Layout from '../components/layout/Layout';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <Layout
      title="About Dr. Teresa (Tess) Flanagan - Academic Background and Research"
      description="Learn about Dr. Tess Flanagan's research in developmental psychology and interactive technologies."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0 border-4 border-softBlue shadow-lg">
              <Image
                src="/images/Tess_Profile.jpeg"
                alt="Dr. Teresa Flanagan"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                About Me
              </h1>
              <div className="prose lg:prose-lg">
                <p>
                  I am a Postdoctoral Scholar at the Data Science Institute (DSI) at the University of Chicago, 
                  where I investigate children's engagement with interactive technologies, such as robots and AI. 
                  My research focuses on understanding how children interact with and learn from technological agents, 
                  with particular emphasis on agency beliefs and moral judgment.
                </p>
              </div>
            </div>
          </div>
          <div className="prose lg:prose-lg">
            <p className="mt-4">
              More recently, I am exploring how we may use these technologies to improve data collection 
              methodologies in developmental psychology. My work bridges developmental psychology, cognitive 
              science, and human-robot interaction, exploring how children understand and attribute properties 
              to interactive technological agents.
            </p>
            <div className="mt-6">
              <a
                href="/tmf87_webcv_3103FCD0-20A9-4DF5-AEB0-8018CBF7C523.pdf"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-softBlue hover:bg-softBlue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-softBlue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
                <svg
                  className="ml-2 -mr-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
            <ul className="space-y-4">
              <li>
                <div className="font-medium">Ph.D. in Psychology</div>
                <div className="text-gray-600">Cornell University</div>
                <div className="text-gray-500">August 2018 - 2024</div>
                <div className="text-gray-600 text-sm mt-1">Concentration in Developmental Psychology, Minor in Cognitive Science</div>
                <div className="text-gray-600 text-sm">Committee: Drs. Tamar Kushnir (Co-Chair), Marianella Casasola (Co-Chair), Lin Bian, Shaun Nichols, David Pizarro</div>
              </li>
              <li>
                <div className="font-medium">B.A. in Scientific and Philosophical Studies of the Mind</div>
                <div className="text-gray-600">Franklin & Marshall College</div>
                <div className="text-gray-500">May 2018</div>
                <div className="text-gray-600 text-sm mt-1">Minor in Applied Mathematics</div>
                <div className="text-gray-600 text-sm">Graduated cum laude</div>
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Research Positions</h2>
            <ul className="space-y-4">
              <li>
                <div className="font-medium">Postdoctoral Scholar</div>
                <div className="text-gray-600">Data Science Institute, University of Chicago</div>
                <div className="text-gray-500">September 2024 - Present</div>
              </li>
              <li>
                <div className="font-medium">Postdoctoral Researcher</div>
                <div className="text-gray-600">Duke University</div>
                <div className="text-gray-500">2024</div>
              </li>
              <li>
                <div className="font-medium">Graduate Researcher</div>
                <div className="text-gray-600">Early Childhood Cognition Lab, Cornell University</div>
                <div className="text-gray-500">August 2018 - 2024</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="card p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Research Focus</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-softBlue mr-2">•</span>
              <span>Children's Engagement with Interactive Technologies</span>
            </li>
            <li className="flex items-start">
              <span className="text-softBlue mr-2">•</span>
              <span>Agency Beliefs and Human-Robot Interaction</span>
            </li>
            <li className="flex items-start">
              <span className="text-softBlue mr-2">•</span>
              <span>Data Collection Methodologies in Developmental Psychology</span>
            </li>
            <li className="flex items-start">
              <span className="text-softBlue mr-2">•</span>
              <span>Social Cognitive Development</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
