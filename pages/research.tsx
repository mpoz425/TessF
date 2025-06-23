import React from 'react';
import Layout from '../components/layout/Layout';

const Research: React.FC = () => {
  return (
    <Layout
      title="Research Areas - Social Cognitive Development and Human-Robot Interaction"
      description="Explore our research in social cognitive development, agency beliefs, and human-robot interaction"
    >
      <div className="max-w-4xl mx-auto pt-20">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Research Overview</h1>
          <p className="mt-4 text-lg text-gray-600">
            My research investigates social cognitive development with a focus on how children understand and interact 
            with robotic agents. Through innovative methodologies and interdisciplinary approaches, we explore questions 
            about agency beliefs, choice, free will, and moral judgment in the context of human-robot interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Research Areas */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Social Cognitive Development
            </h2>
            <p className="text-gray-600">
              Investigating how children develop understanding of agency, choice, and free will, 
              particularly in the context of interactions with technological agents.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Agency Beliefs and Human-Robot Interaction
            </h2>
            <p className="text-gray-600">
              Exploring how children attribute properties and capabilities to robotic agents, 
              and how these beliefs influence their interactions and learning.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Choice and Free Will
            </h2>
            <p className="text-gray-600">
              Examining children's understanding of choice and free will, particularly in 
              their attributions to humanoid robots and other technological agents.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Moral Judgment
            </h2>
            <p className="text-gray-600">
              Studying how children develop moral understanding and make moral judgments 
              in the context of human-robot interaction.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Research;
