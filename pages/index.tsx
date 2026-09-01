import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import CurrentlyStrip from '../components/home/CurrentlyStrip';
import ResearchPreview from '../components/home/ResearchPreview';
import FeaturedWork from '../components/home/FeaturedWork';
import Approach from '../components/home/Approach';
import News from '../components/home/News';
import ContactCta from '../components/ui/ContactCta';

const Home: NextPage = () => (
  <Layout structuredData>
    <Hero />
    <CurrentlyStrip />
    <ResearchPreview />
    <FeaturedWork />
    <Approach />
    <News />
    <ContactCta />
  </Layout>
);

export default Home;
