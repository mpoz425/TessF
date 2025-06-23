import React from 'react';
import Head from 'next/head';
import Hero from '../components/ui/Hero';
import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout
      title="Dr. Teresa (Tess) Flanagan - Child-Robot Interaction Research"
      description="Discover Dr. Flanagan's innovative research on child-robot interactions and developmental psychology."
    >
      <Hero />
    </Layout>
  );
};

export default Home;
