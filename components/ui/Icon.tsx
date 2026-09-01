import React from 'react';

type IconName =
  | 'email'
  | 'scholar'
  | 'orcid'
  | 'x'
  | 'linkedin'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'doi'
  | 'pdf'
  | 'code'
  | 'data'
  | 'menu'
  | 'close';

const paths: Record<IconName, React.ReactNode> = {
  email: (
    <path d="M3 6.5A1.5 1.5 0 014.5 5h15A1.5 1.5 0 0121 6.5v11a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5v-11zm1.8.5l7.2 5.1L19.2 7H4.8z" />
  ),
  scholar: <path d="M12 2L1 8l11 6 9-4.91V17h2V8L12 2zM4 12.4V16c0 2.2 3.6 4 8 4s8-1.8 8-4v-3.6l-8 4.37-8-4.37z" />,
  orcid: (
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.37 18.19H5.62V6.9h1.75v11.29zM6.5 5.86a1.06 1.06 0 110-2.12 1.06 1.06 0 010 2.12zM17.9 15.6c-.98 1.75-2.8 2.59-4.87 2.59H9.4V6.9h4.06c2.02 0 3.83.87 4.79 2.55.86 1.5.86 4.62-.35 6.15zm-1.42-5.28c-.66-1.13-1.9-1.79-3.45-1.79h-1.88v8.05h1.88c1.55 0 2.79-.66 3.45-1.8.62-1.06.62-3.4 0-4.46z" />
  ),
  x: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
  ),
  linkedin: (
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19v4.81h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.4.86 3.4 3.66V19z" />
  ),
  'arrow-right': (
    <path
      d="M4 12h16m0 0l-6-6m6 6l-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  'arrow-up-right': (
    <path
      d="M7 17L17 7m0 0H8m9 0v9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  doi: (
    <path
      d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 000 18 14 14 0 000-18z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  ),
  pdf: (
    <path
      d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5zm0 0v5h5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  code: (
    <path
      d="M8 17l-5-5 5-5m8 10l5-5-5-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  data: (
    <path
      d="M12 7c4.42 0 8-1.12 8-2.5S16.42 2 12 2 4 3.12 4 4.5 7.58 7 12 7zM4 4.5v15C4 20.88 7.58 22 12 22s8-1.12 8-2.5v-15M4 12c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  menu: (
    <path
      d="M4 7h16M4 12h16M4 17h16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  ),
  close: (
    <path
      d="M6 6l12 12M18 6L6 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  ),
};

type IconProps = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      {paths[name]}
    </svg>
  );
}

export type { IconName };
