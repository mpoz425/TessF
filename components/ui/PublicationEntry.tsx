import React from 'react';
import Icon, { IconName } from './Icon';
import { Publication, typeLabels } from '../../data/publications';

/** Renders an author string, bolding the segment wrapped in `**`. */
export function Authors({ value }: { value: string }) {
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
  doi: { label: 'Paper', icon: 'doi' },
  pdf: { label: 'PDF', icon: 'pdf' },
  code: { label: 'Code', icon: 'code' },
  osf: { label: 'Data', icon: 'data' },
};

export default function PublicationEntry({ publication }: { publication: Publication }) {
  const { title, authors, venue, detail, year, type, links } = publication;
  const entries = Object.entries(links ?? {}).filter(([, href]) => Boolean(href));

  return (
    <article className="group border-b border-rule py-7 last:border-0">
      <div className="flex flex-wrap items-center gap-2">
        <span className="tag-neutral">{typeLabels[type]}</span>
        <span className="font-mono text-xs text-ink-faint">
          {typeof year === 'number' ? year : 'In press'}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{title}</h3>

      <p className="mt-2 text-sm text-ink-mute">
        <Authors value={authors} />
      </p>

      <p className="mt-1 text-sm text-ink-mute">
        <span className="text-ink-soft">{venue}</span>
        {detail && `, ${detail}`}
      </p>

      {entries.length > 0 && (
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
        </div>
      )}
    </article>
  );
}
