import React from 'react';
import { Publication } from '../../utils/publications';

interface PublicationsListProps {
  publications: Publication[];
}

const PublicationsList: React.FC<PublicationsListProps> = ({ publications }) => {
  // Group publications by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<string, Publication[]>);

  // Sort years in descending order
  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="space-y-8 sm:space-y-12">
      {sortedYears.map(year => (
        <div key={year} className="space-y-6 sm:space-y-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{year}</h3>
          <div className="space-y-6 sm:space-y-8">
            {publicationsByYear[year].map((pub) => (
              <article key={pub.id} className="bg-white rounded-lg shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {pub.title}
                    </h4>
                    <div className="text-sm text-gray-600 mb-2">
                      {pub.authors}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 flex flex-wrap items-center gap-2">
                      <span className="truncate">{pub.journal}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{pub.year}</span>
                      {pub.type && (
                        <>
                          <span className="hidden sm:inline">•</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-softBlue-100 text-softBlue-800">
                            {pub.type === 'journal' ? 'Journal Article' : 
                             pub.type === 'conference' ? 'Conference Paper' :
                             pub.type === 'thesis' ? 'Thesis' : 'Preprint'}
                          </span>
                        </>
                      )}
                      {pub.cites && (
                        <>
                          <span className="hidden sm:inline">•</span>
                          <span className="text-gray-500">
                            {pub.cites} citations
                          </span>
                        </>
                      )}
                    </div>
                    {pub.abstract && (
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{pub.abstract}</p>
                    )}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-softBlue-600 hover:text-softBlue-800 text-sm"
                      >
                        Read Paper
                        <svg
                          className="ml-1 h-3 w-3 sm:h-4 sm:w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationsList;
