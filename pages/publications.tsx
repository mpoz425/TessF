import React from 'react';
import Layout from '../components/layout/Layout';
import PublicationsList from '../components/ui/PublicationsList';
import { getPublications } from '../utils/publications';

const Publications: React.FC = () => {
  const publications = getPublications();

  return (
    <Layout
      title="Research Publications - Child-Robot Interaction Studies"
      description="Browse through Dr. Flanagan's academic publications on child-robot interaction and developmental psychology"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Publications</h1>
          <p className="mt-4 text-lg text-gray-600">
            My research has been published in leading journals and conferences in developmental psychology, 
            human-robot interaction, and cognitive science. Below you'll find my recent publications, 
            with a focus on child development, interactive technologies, and research methodologies.
          </p>
        </div>

        <div className="space-y-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900">Recent Publications</h2>
            <p className="text-gray-600">
              For a complete list of publications or to request access to any papers, 
              please feel free to contact me.
            </p>
          </div>

          <div className="divide-y divide-gray-200">
            <PublicationsList publications={publications} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
