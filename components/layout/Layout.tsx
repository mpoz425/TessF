import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Dr. Teresa Flanagan",
  description = "Exploring child-robot interactions and development"
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-softPink-50 via-white to-softBlue-50">
      <div className="min-h-screen flex flex-col backdrop-blur-3xl bg-gradient-radial from-white/80 via-transparent to-transparent">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
