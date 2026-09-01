import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import CurrentlyStrip from '../components/home/CurrentlyStrip';
import AboutSection from '../components/home/AboutSection';
import ResearchPreview from '../components/home/ResearchPreview';

const Home: NextPage = () => (
  <Layout structuredData>
    <Hero />
    <CurrentlyStrip />
    <AboutSection />
    <ResearchPreview />
  </Layout>
);

export default Home;
