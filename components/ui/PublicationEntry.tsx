import React from 'react';
import Icon, { IconName } from './Icon';
import { Publication, typeLabels } from '../../data/publications';

/** Renders an author string, bolding the segment wrapped in `**`. */
function Authors({ value }: { value: string }) {
  const parts = value.split('**');
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

const linkMeta: Record<string, { label: string; icon: IconName }> = {
  doi: { label: 'DOI', icon: 'doi' },
  pdf: { label: 'PDF', icon: 'pdf' },
  code: { label: 'Code', icon: 'code' },
  osf: { label: 'Data', icon: 'data' },
};

type PublicationEntryProps = {
  publication: Publication;
  /** Featured entries show the plain-language summary and a heavier title. */
  variant?: 'default' | 'featured';
};

export default function PublicationEntry({ publication, variant = 'default' }: PublicationEntryProps) {
  const { title, authors, venue, detail, year, type, summary, award, citations, links } = publication;
  const featured = variant === 'featured';
  const entries = Object.entries(links ?? {}).filter(([, href]) => Boolean(href));

  return (
    <article
      className={
        featured
          ? 'card-interactive group relative p-6 sm:p-8'
          : 'group border-b border-rule py-7 last:border-0'
      }
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="tag-neutral">{typeLabels[type]}</span>
        {award && (
          <span className="tag-moss">
            <span aria-hidden="true" className="mr-1">
              ★
            </span>
            {award}
          </span>
        )}
        {!featured && <span className="font-mono text-xs text-ink-faint">{year}</span>}
      </div>

      <h3
        className={`mt-3 font-semibold text-ink ${
          featured ? 'text-xl sm:text-2xl' : 'text-lg leading-snug'
        }`}
      >
        {title}
      </h3>

      <p className="mt-2 text-sm text-ink-mute">
        <Authors value={authors} />
      </p>

      <p className="mt-1 text-sm text-ink-mute">
        <em className="not-italic text-ink-soft">{venue}</em>
        {detail && `, ${detail}`}
        {featured && `, ${year}`}
      </p>

      {featured && summary && (
        <p className="mt-4 border-l-2 border-clay-200 pl-4 text-[0.95rem] leading-relaxed text-ink-soft">
          {summary}
        </p>
      )}

      {(entries.length > 0 || citations) && (
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {entries.map(([key, href]) => {
            const meta = linkMeta[key];
            if (!meta) return null;
            return (
              <a
                key={key}
                href={href as string}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-clay"
              >
                <Icon name={meta.icon} className="h-3.5 w-3.5" />
                {meta.label}
              </a>
            );
          })}
          {citations ? (
            <span className="font-mono text-xs text-ink-faint">
              {citations} citation{citations === 1 ? '' : 's'}
            </span>
          ) : null}
        </div>
      )}
    </article>
  );
}
