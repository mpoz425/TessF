import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-content-gradient">
      <div className="max-w-none mx-auto">
        <div className="relative">
          {/* Full-width image container */}
          <div className="relative w-full" style={{ height: 'calc(100vh - 300px)' }}>
            <div className="absolute inset-0">
              <Image
                src="/images/Tess_Hero.png"
                alt="Dr. Teresa Flanagan presenting her research on children's interaction with digital technologies"
                fill
                style={{ objectFit: 'cover', objectPosition: 'left center' }}
                loading="eager"
                className="w-full"
              />
            </div>
            
            {/* Full-width banner at bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-20 px-8 py-6 bg-white/90 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="max-w-2xl">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block text-softBlue text-2xl sm:text-3xl">
                      Developmental Psychology & Human-Robot Interaction Researcher
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-700 sm:mt-4 sm:text-lg">
                    Postdoctoral Scholar at the Data Science Institute (DSI), University of Chicago, 
                    investigating children's interactions with interactive technologies 
                    and developing innovative methodologies in developmental psychology research.
                  </p>
                  <div className="mt-2 text-gray-600 flex items-center space-x-4">
                    <a href="mailto:tflanagan2@uchicago.edu" className="hover:text-softBlue transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      tflanagan2@uchicago.edu
                    </a>
                    <a 
                      href="https://x.com/TMFlanagan1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-softBlue transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      @TMFlanagan1
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/teresa-flanagan-18789129a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-softBlue transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="/research"
                    className="btn-primary whitespace-nowrap"
                  >
                    Research Overview
                  </Link>
                  <Link
                    href="/publications"
                    className="btn-secondary whitespace-nowrap"
                  >
                    Publications
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
